import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core'; // ✅ Importando AfterViewInit
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import { Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-saas',
  standalone: true, // ✅ Adicionando standalone: true
  imports: [CommonModule, TranslateModule, NavbarComponent, FooterComponent],
  templateUrl: './saas.component.html',
  styleUrls: ['./saas.component.scss'] // ✅ Correção aqui (styleUrls no plural)
})
export class SaasComponent implements AfterViewInit {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Brasilsync - SaaS');
  }
  currentIndex = 0;
  indicatorIndexes = [0, 1, 2, 3, 4, 5];

  clientes = [
    { image: '/images/carrossel_clientes_nkg-1.png' },
    { image: '/images/carrossel_clientes_coopercam-1.png' },
    { image: '/images/carrossel_clientes_cocapil-1.png' },
    { image: '/images/carrossel_clientes_jkim-1.png' },
    { image: '/images/carrossel_clientes_flycoffee-1.png' },
    { image: '/images/carrossel_clientes_coomap-1.png' }
  ];

  private aberto: { [key: string]: boolean } = {};


  // Função para verificar se o acordeon está aberto
  isOpen(key: string): boolean {
    return this.aberto[key] || false;
  }

  // Função para alternar o estado do acordeon
  toggleAcordeon(key: string): void {
    this.aberto[key] = !this.aberto[key];
  }

  ngAfterViewInit(): void {
    new Swiper('.mySwiper', {
      modules: [Autoplay, Pagination],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
}
