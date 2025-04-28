import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-contato',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('É Big - Contato');
  }

}
