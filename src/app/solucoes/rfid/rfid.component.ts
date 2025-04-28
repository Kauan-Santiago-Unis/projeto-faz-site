import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-rfid',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './rfid.component.html',
  styleUrl: './rfid.component.scss'
})
export class RfidComponent {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Brasilsync - RFID e Tags');
  }
}
