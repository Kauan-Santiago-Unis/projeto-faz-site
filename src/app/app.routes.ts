import { Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Define a rota padrão para 'home'
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent }, // Define a rota padrão para 'home'
  { path: 'contato', component: ContatoComponent }, // Define a rota padrão para 'home'
  { path: 'sobre', component: SobreComponent }, // Define a rota padrão para 'home'

  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona qualquer rota inválida para a home
];
