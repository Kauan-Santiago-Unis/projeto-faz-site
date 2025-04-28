import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-automacao',
  imports: [CommonModule, TranslateModule, NavbarComponent, FooterComponent],
  templateUrl: './automacao.component.html',
  styleUrl: './automacao.component.scss'
})
export class AutomacaoComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Brasilsync - Automação');
  }
}
