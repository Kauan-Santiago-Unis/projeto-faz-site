import { Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { SobreComponent } from './sobre/sobre.component';
import { AutomacaoComponent } from './solucoes/automacao/automacao.component';
import { IntegracoesComponent } from './solucoes/integracoes/integracoes.component';
import { MobileComponent } from './solucoes/mobile/mobile.component';
import { RfidComponent } from './solucoes/rfid/rfid.component';
import { SaasComponent } from './solucoes/saas/saas.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { WmsComponent } from './solucoes/wms/wms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Define a rota padrão para 'home'
  { path: 'politica-privacidade', component: PoliticaPrivacidadeComponent }, // Define a rota padrão para 'home'
  { path: 'contato', component: ContatoComponent }, // Define a rota padrão para 'home'
  { path: 'sobre', component: SobreComponent }, // Define a rota padrão para 'home'
  { path: 'solucoes', component: SolucoesComponent }, // Define a rota padrão para 'home'
  { path: 'solucoes/wms', component: WmsComponent }, // Define a rota padrão para 'home'
  { path: 'solucoes/mobile', component: MobileComponent }, // Define a rota padrão para 'home'
  { path: 'solucoes/saas', component: SaasComponent }, // Define a rota padrão para 'home'
  { path: 'solucoes/rfid', component: RfidComponent }, // Define a rota padrão para 'home'
  { path: 'solucoes/automacao', component: AutomacaoComponent }, // Define a rota padrão para 'home'
  { path: 'solucoes/integracoes', component: IntegracoesComponent }, // Define a rota padrão para 'home'


  { path: '**', redirectTo: '', pathMatch: 'full' } // Redireciona qualquer rota inválida para a home
];
