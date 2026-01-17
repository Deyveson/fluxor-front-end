import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-relatorios',
  imports: [CommonModule, FormsModule, Sidebar, MatIcon, MatButtonModule],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.scss',
})
export class Relatorios {
  selectedPeriod = 'ultimo-mes';
  selectedProfissional = 'todos';
  selectedServico = 'todos';
  activeTab = 'visao-geral';

  periods = [
    { label: 'Últimos 7 dias', value: 'ultimos-7' },
    { label: 'Último mês', value: 'ultimo-mes' },
    { label: 'Últimos 3 meses', value: 'ultimos-3' },
    { label: 'Último ano', value: 'ultimo-ano' },
    { label: 'Personalizado', value: 'personalizado' },
  ];

  profissionais = [
    { label: 'Todos os profissionais', value: 'todos' },
    { label: 'Dr. João Silva', value: 'joao' },
    { label: 'Dr. Pedro Oliveira', value: 'pedro' },
    { label: 'Dra. Rafaela Menezes', value: 'rafaela' },
  ];

  servicos = [
    { label: 'Todos os serviços', value: 'todos' },
    { label: 'Consulta Cardiologia', value: 'cardiologia' },
    { label: 'Retorno Pediatria', value: 'pediatria' },
    { label: 'Avaliação Ortopédica', value: 'ortopedia' },
    { label: 'Consulta Dermatologia', value: 'dermatologia' },
  ];

  tabs = [
    { id: 'visao-geral', label: 'Visão Geral', icon: 'visibility' },
    { id: 'funil-conversao', label: 'Funil de Conversão', icon: 'show_chart' },
    { id: 'por-profissional', label: 'Por Profissional', icon: 'person' },
    { id: 'por-servico', label: 'Por Serviço', icon: 'assignment' },
    { id: 'financeiro', label: 'Financeiro', icon: 'attach_money' },
    { id: 'retorno', label: 'Retorno', icon: 'repeat' },
    { id: 'origem', label: 'Origem', icon: 'source' },
    { id: 'exportacoes', label: 'Exportações', icon: 'download' },
  ];

  // Indicadores principais
  indicadores = {
    contatosRecebidos: {
      valor: 342,
      variacao: 12,
      label: 'Contatos Recebidos',
      icon: 'contacts',
      cor: 'blue'
    },
    agendamentosCriados: {
      valor: 256,
      variacao: 8,
      label: 'Agendamentos Criados',
      icon: 'calendar_today',
      cor: 'green'
    },
    atendimentosRealizados: {
      valor: 218,
      variacao: 5,
      label: 'Atendimentos Realizados',
      icon: 'task_alt',
      cor: 'purple'
    },
    taxaConversao: {
      valor: 63.7,
      variacao: -2,
      label: 'Taxa de Conversão',
      icon: 'trending_up',
      cor: 'orange',
      unidade: '%'
    }
  };

  // Métricas financeiras
  metricas = [
    {
      titulo: 'Receita Total',
      valor: 'R$ 76.850,00',
      cor: 'green',
      icon: 'attach_money'
    },
    {
      titulo: 'Ticket Médio',
      valor: 'R$ 352,52',
      cor: 'blue',
      icon: 'receipt'
    },
    {
      titulo: 'Taxa de No-Show',
      valor: '8.5%',
      cor: 'red',
      icon: 'warning'
    },
    {
      titulo: 'Taxa de Retorno',
      valor: '42.3%',
      cor: 'purple',
      icon: 'repeat'
    }
  ];

  // Funil de Conversão
  funilConversao = [
    {
      etapa: 'Entraram em Contato',
      quantidade: 342,
      percentual: 100,
      variacao: 0,
      icon: 'contact_mail'
    },
    {
      etapa: 'Iniciaram Agendamento',
      quantidade: 289,
      percentual: 84.5,
      variacao: -15.5,
      icon: 'calendar_today'
    },
    {
      etapa: 'Concluíram Agendamento',
      quantidade: 256,
      percentual: 74.9,
      variacao: -9.6,
      icon: 'check_circle'
    },
    {
      etapa: 'Compareceram',
      quantidade: 234,
      percentual: 68.4,
      variacao: -6.5,
      icon: 'task_alt'
    },
    {
      etapa: 'Retornaram',
      quantidade: 99,
      percentual: 28.9,
      variacao: -39.5,
      icon: 'repeat'
    }
  ];

  // Por Profissional
  desempenhoProfissional = [
    {
      profissional: 'Dr. João Silva',
      atendimentos: 87,
      taxaNoShow: 5.2,
      receita: 28450,
      tempoMedio: 52,
      retornos: 38
    },
    {
      profissional: 'Dra. Maria Santos',
      atendimentos: 65,
      taxaNoShow: 6.1,
      receita: 18950,
      tempoMedio: 48,
      retornos: 28
    },
    {
      profissional: 'Dr. Pedro Oliveira',
      atendimentos: 43,
      taxaNoShow: 11.6,
      receita: 15870,
      tempoMedio: 55,
      retornos: 18
    },
    {
      profissional: 'Dra. Rafaela Menezes',
      atendimentos: 23,
      taxaNoShow: 8.7,
      receita: 13580,
      tempoMedio: 45,
      retornos: 15
    }
  ];

  // Por Serviço
  desempenhoServico = [
    {
      servico: 'Consulta Cardiologia',
      agendados: 95,
      realizados: 87,
      taxaConversao: 91.6,
      receita: 30450,
      ticketMedio: 350,
      percentualRetorno: 45
    },
    {
      servico: 'Consulta Pediatria',
      agendados: 68,
      realizados: 62,
      taxaConversao: 91.2,
      receita: 17360,
      ticketMedio: 280,
      percentualRetorno: 32
    },
    {
      servico: 'Avaliação Ortopédica',
      agendados: 45,
      realizados: 41,
      taxaConversao: 91.1,
      receita: 13120,
      ticketMedio: 320,
      percentualRetorno: 28
    },
    {
      servico: 'Limpeza Dental',
      agendados: 48,
      realizados: 38,
      taxaConversao: 79.2,
      receita: 5700,
      ticketMedio: 150,
      percentualRetorno: 18
    }
  ];

  // Financeiro - Receita por Categoria
  receitaPorCategoria = [
    { categoria: 'Consultas', valor: 47810, percentual: 62, cor: '#10b981' },
    { categoria: 'Procedimentos', valor: 19140, percentual: 25, cor: '#3b82f6' },
    { categoria: 'Retornos', valor: 9900, percentual: 13, cor: '#a855f7' }
  ];

  // Retorno e Recorrência
  servicosComMaiorRetorno = [
    { servico: 'Consulta Cardiologia', realizados: 87, percentualRetorno: 45 },
    { servico: 'Consulta Pediatria', realizados: 62, percentualRetorno: 32 },
    { servico: 'Avaliação Ortopédica', realizados: 41, percentualRetorno: 28 }
  ];

  // Origem e Canais
  desempenhoOrigem = [
    { origem: 'Agendamento Online', clientes: 142, conversao: 71.2, receita: 42270 },
    { origem: 'Lista de Espera', clientes: 68, conversao: 65.8, receita: 19980 },
    { origem: 'Cadastro Manual', clientes: 46, conversao: 48.5, receita: 14600 }
  ];

  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }

  getActiveTabLabel(): string {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    return tab ? tab.label : '';
  }

  exportarDados(): void {
    console.log('Exportando dados...');
  }
}
