import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private translate: TranslateService, private cdRef: ChangeDetectorRef) { }
  isDropdownVisible: boolean = false; // Variável para controlar a visibilidade do dropdown
  isMobileMenuVisible: boolean = false; // Variável para controlar a visibilidade do menu mobile
  ngOnInit() {
    // Configurar idiomas disponíveis
    this.translate.addLangs(['pt', 'en', 'es']);

    // Detectar idioma do navegador
    const browserLang = this.translate.getBrowserLang();

    // Usar idioma do navegador se disponível, senão usar inglês
    this.translate.use(browserLang?.match(/pt|en/) ? browserLang : 'pt');

  }

  // Método para trocar idioma
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.isDropdownVisible = false;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }


  toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
}