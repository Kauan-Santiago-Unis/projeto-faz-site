import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, interval } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { TurnstileComponent } from '../components/turnstile/turnstile.component';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule, FooterComponent, TranslateModule, TurnstileComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  captchaToken: string | null = null;
  formStatus: any;


  onTokenReceived(token: string) {
    this.captchaToken = token; // Armazena o token do CAPTCHA
  }
  // Propriedades do componente
  translatedDescription: any = ''; // Usado para armazenar a descrição traduzida
  activeTab: string = 'softwares';
  slides: any[] = [];
  clientes = [
    { image: '/images/carrossel_clientes_nkg-1.png' },
    { image: '/images/carrossel_clientes_coopercam-1.png' },
    { image: '/images/carrossel_clientes_cocapil-1.png' },
    { image: '/images/carrossel_clientes_jkim-1.png' },
    { image: '/images/carrossel_clientes_flycoffee-1.png' },
    { image: '/images/carrossel_clientes_coomap-1.png' }
  ];

  private destroy$ = new Subject<void>(); // Usado para cancelar os observáveis ao destruir o componente
  private intervalId: any;
  currentIndex = 0;

  // Construtor
  constructor(private translate: TranslateService, private sanitizer: DomSanitizer, private fb: FormBuilder) {
    // Carregar a tradução ao inicializar
    this.loadTranslation();



    // Assinar mudanças de idioma
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslation();
      this.loadSlides(); // Recarregar os slides ao mudar o idioma
    });
  }

  // Ciclo de vida do componente
  ngOnInit(): void {
    this.loadSlides(); // Carregar os slides na inicialização do componente

    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      sector: ['', Validators.required],
      message: ['', Validators.required],
      privacyPolicy: [false, Validators.requiredTrue]  // Certifique-se de que a validação está correta
    });

    // Usando RxJS para controlar a troca automática de slides
    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(); // Emitir evento para destruir observáveis
    this.destroy$.complete(); // Completar o subject
  }

  // Funções para carregar traduções
  private loadTranslation(): void {
    this.translate.get('HOME.DESCRIPTION').subscribe((res: string) => {
      // Usando o DomSanitizer para permitir o HTML
      this.translatedDescription = this.sanitizer.bypassSecurityTrustHtml(res);
    });
  }

  private loadSlides(): void {
    this.slides = [
      {
        image: '/images/slider/baloes.png',
        title: 'BALÕES',
        description: '',
        buttonName: 'CONFERIR',
        buttonLink: '/sobre'
      },
      {
        image: '/images/slider/descartaveis.png',
        title: 'DESCARTÁVEIS',
        description: '',
        buttonName: 'Botao 2',
        buttonLink: '/solucoes/wms'
      },
      {
        image: '/images/slider/chocolates.png',
        title: 'Chocolates',
        description: '',
        buttonName: 'Botao 3',
        buttonLink: '/solucoes'
      }
    ];
  }

  // Funções para controle de abas
  selecionarAba(aba: string): void {
    this.activeTab = aba;
  }





  onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.captchaToken) {
      console.log('O CAPTCHA não foi validado!');
      return;
    }

    if (this.form.invalid) {
      console.log('Formulário inválido!');
      return;
    }

    // Lógica para enviar o formulário
    console.log('Formulário enviado com sucesso!');
  }






  // Funções para controle do carrossel
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  get carouselTransform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  get indicatorIndexes(): number[] {
    return new Array(this.clientes.length).fill(0).map((_, i) => i);
  }
}
