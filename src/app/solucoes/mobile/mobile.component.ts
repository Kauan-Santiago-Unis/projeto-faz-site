import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-mobile',
  imports: [CommonModule, FooterComponent, NavbarComponent],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Brasilsync - Mobile');
  }

}
