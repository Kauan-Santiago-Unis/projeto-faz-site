import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatwootService {
  private chatScriptLoaded = false;

  constructor() { }

  loadChatScript() {
    if (this.chatScriptLoaded) return;
    this.chatScriptLoaded = true;

    const script = document.createElement('script');
    script.src = 'https://chat.brasilsync.com.br/packs/js/sdk.js';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Detecta o idioma do navegador
      const userLang = navigator.language; // Usando apenas navigator.language

      // Mapeia para os códigos de idioma aceitos pelo Chatwoot
      let locale = 'en'; // Idioma padrão (Inglês)

      if (userLang.startsWith('pt')) {
        locale = 'pt-BR'; // Se o idioma for português
      } else if (userLang.startsWith('es')) {
        locale = 'es'; // Se o idioma for espanhol
      } else if (userLang.startsWith('fr')) {
        locale = 'fr'; // Se o idioma for francês
      } else if (userLang.startsWith('de')) {
        locale = 'de'; // Se o idioma for alemão
      }

      console.log(locale)

      // Verifica se o SDK foi carregado corretamente e inicializa o chat com o idioma correto
      if (window['chatwootSDK']) {
        window['chatwootSDK'].run({
          websiteToken: 'h6bS9r6duJnsrz6oQK7wxqCe',
          baseUrl: 'https://chat.brasilsync.com.br',
          locale: locale  // Passa o idioma detectado
        });
      } else {
        console.error('Chatwoot SDK não carregado corretamente.');
      }
    };

    script.onerror = () => {
      console.error('Erro ao carregar o script do Chatwoot.');
    };
  }
}
