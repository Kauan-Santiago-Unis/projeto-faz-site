import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-wms',
  imports: [CommonModule, TranslateModule, FooterComponent, NavbarComponent],
  templateUrl: './wms.component.html',
  styleUrl: './wms.component.scss'
})
export class WmsComponent {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Brasilsync - WMS');
  }


  currentIndex = 0;
  indicatorIndexes = [0, 1, 2, 3, 4, 5];


  selectedTab: string = 'Tab1';
  selectedSubTab: string = 'Tab1-1';

  tabs = [
    {
      id: 'Tab1',
      subtabs: [
        { id: 'Tab1-1', name: 'Recepção', title: 'Gerencie os recebimentos e acompanhe toda a movimentação de entrada', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/06/img_wms_tab_reb_rec.png', points: ['Faça o pré-cadastro dos recebimentos com antecedência', 'Controle o processo de chegada', 'Vincule notas fiscais para garantir a rastreabilidade'] },
        { id: 'Tab1-2', name: 'Pesagem', title: 'Realize pesagens de entrada e saída com garantia da confiabilidade dos dados', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/06/img_wms_tab_reb_pes.png', points: ['Integração com a balança rodoviária', 'Leitura automática do peso'] },
        { id: 'Tab1-3', name: 'Romaneio', title: 'Valide os dados de recebimento e tenha segurança das informações', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/06/img_wms_tab_reb_rom.png', points: ['Controle da autorização de descarga', 'Validação dos lotes'] }
      ]
    },
    {
      id: 'Tab2',
      subtabs: [
        { id: 'Tab2-1', name: 'Descarga', title: 'Controle as descargas e o envase de BIG BAGs', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/06/img_wms_tab_arm_des.png', points: ['Integração com a balança', 'Marcação dos BAGs com TAGs personalizadas'] },
        { id: 'Tab2-2', name: 'Rastreabilidade', title: 'Tenha total rastreabilidade dos lotes e BAGs no armazém e maquinário', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/06/img_wms_tab_arm_des-1.png', points: ['Armazenagem organizada por armazéns', 'Leitores RFID nos maquinários'] },
        { id: 'Tab2-3', name: 'Inventário', title: 'Valide os lotes armazenados para os inventários semanais, mensais ou anuais', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/06/img_wms_tab_arm_inv-1.png', points: ['Tenha o mapa do armazém na WEB', 'Gere relatórios detalhados dos inventários realizados'] }
      ]
    },
    {
      id: 'Tab3',
      subtabs: [
        { id: 'Tab3-1', name: 'Classificação', title: 'Gerencie a classificação dos lotes', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/07/img_wms_tab_cla_cla.png', points: ['Integração com a balança', 'Criação automática dos BAGs'] }
      ]
    },
    {
      id: 'Tab4',
      subtabs: [
        { id: 'Tab4-1', name: 'Contratos', title: 'Gere e valide contratos de compra e venda', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/07/img_wms_tab_com_con.png', points: ['Emita contratos com os dados da negociação', 'Inclua os lotes negociados'] },
        { id: 'Tab4-2', name: 'Notas Fiscais', title: 'Gerencie a emissão de Notas Fiscais Eletrônicas', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/07/img_wms_tab_com_nf.png', points: ['Emita notas fiscais de entrada', 'Integração com Sistema de Gestão Empresarial'] },
        { id: 'Tab4-3', name: 'Ordens de Serviço', title: 'Gere Ordens e Guias de Serviço para Comercialização', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/07/img_wms_tab_com_ord.png', points: ['Gere Ordens de Serviço', 'Integração com o sistema das empilhadeiras'] }
      ]
    },
    {
      id: 'Tab5',
      subtabs: [
        { id: 'Tab5-1', name: 'Embarque', title: 'Tenha o controle dos embarques e gerencie os itens do transporte', imgSrc: 'https://brasilsync.com.br/wp-content/uploads/2024/07/img_wms_tab_emb_emb.png', points: ['Gerencie as entregas', 'Vincule os lotes aos compartimentos'] }
      ]
    }
  ];

  openTab(tabId: string) {
    this.selectedTab = tabId;
    this.selectedSubTab = this.tabs.find(tab => tab.id === tabId)?.subtabs[0].id || '';
    console.log(this.selectedSubTab)
  }

  openSubTab(subTabId: string) {
    this.selectedSubTab = subTabId;
  }


  mainTabs = this.tabs.map(tab => ({ id: tab.id }));

  getMainTabLabel(tabId: string): string {
    switch (tabId) {
      case 'Tab1': return 'Recebimento';
      case 'Tab2': return 'Armazenamento';
      case 'Tab3': return 'Classificação';
      case 'Tab4': return 'Comercialização';
      case 'Tab5': return 'Embarque';
      default: return '';
    }
  }



  clientes = [
    { image: '/images/carrossel_clientes_nkg-1.png' },
    { image: '/images/carrossel_clientes_coopercam-1.png' },
    { image: '/images/carrossel_clientes_cocapil-1.png' },
    { image: '/images/carrossel_clientes_jkim-1.png' },
    { image: '/images/carrossel_clientes_flycoffee-1.png' },
    { image: '/images/carrossel_clientes_coomap-1.png' }
  ];

  // Troca de aba principal
  changeTab(tab: string) {
    this.selectedTab = tab;
  }

}
