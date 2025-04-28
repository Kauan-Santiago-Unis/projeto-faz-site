import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-solucoes',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './solucoes.component.html',
  styleUrl: './solucoes.component.scss'
})
export class SolucoesComponent {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Brasilsync - Soluções');
  }

}
