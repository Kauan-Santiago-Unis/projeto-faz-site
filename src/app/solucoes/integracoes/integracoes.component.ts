import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-integracoes',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './integracoes.component.html',
  styleUrl: './integracoes.component.scss'
})
export class IntegracoesComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Brasilsync - Integrações');
  }
}
