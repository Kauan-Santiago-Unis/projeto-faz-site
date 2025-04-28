import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatwootService } from './chatwoot.service';
import { ConsentPopupComponent } from './components/consent-popup/consent-popup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConsentPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private chatwootService: ChatwootService) { }

  title = 'brasilsync';


  ngOnInit(): void {
    this.chatwootService.loadChatScript();
  }
}
