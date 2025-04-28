import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-politica-privacidade',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './politica-privacidade.component.html',
  styleUrl: './politica-privacidade.component.scss'
})
export class PoliticaPrivacidadeComponent {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Brasilsync - Política de Privacidade');
  }

}
