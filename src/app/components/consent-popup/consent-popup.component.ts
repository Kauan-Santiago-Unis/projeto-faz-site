import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-consent-popup',
  templateUrl: './consent-popup.component.html',
  imports: [TranslateModule,
    CommonModule],
  styleUrls: ['./consent-popup.component.scss']
})
export class ConsentPopupComponent implements OnInit {

  constructor(private translate: TranslateService) { }
  hasConsented: boolean = false;

  ngOnInit(): void {
    this.hasConsented = localStorage.getItem('hasConsented') === 'true';
  }

  acceptConsent() {
    this.hasConsented = true;
    localStorage.setItem('hasConsented', 'true');
  }
}
