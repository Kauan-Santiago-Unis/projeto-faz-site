import { AfterViewInit, Component, EventEmitter, NgZone, Output } from '@angular/core';

@Component({
  selector: 'app-turnstile',
  templateUrl: './turnstile.component.html',
  styleUrls: ['./turnstile.component.css']
})
export class TurnstileComponent implements AfterViewInit {
  @Output() tokenEmitted = new EventEmitter<string>();

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if ((window as any).turnstile) {
        (window as any).turnstile.render('.cf-turnstile', {
          sitekey: '0x4AAAAAAA6fPobnHDfuv1vy',
          theme: 'light',
          callback: (token: string) => {
            this.tokenEmitted.emit(token);
          }
        });
      } else {
        console.error("Cloudflare Turnstile não carregou corretamente.");
      }
    }, 1000); // Atraso para garantir que o script foi carregado
  }

}
