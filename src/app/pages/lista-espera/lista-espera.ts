import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Sidebar } from '../../components/sidebar/sidebar';

interface ListaEsperaItem {
  id: number;
  nomePaciente: string;
  prioridade: 'urgente' | 'alta' | 'media' | 'baixa';
  status: 'aguardando' | 'contatado' | 'confirmado';
  servico: string;
  profissional: string;
  dataPreferia: string;
  horario: string;
  diasEspera: number;
  observacao: string;
}

@Component({
  selector: 'app-lista-espera',
  imports: [CommonModule, FormsModule, Sidebar, MatIcon, MatButtonModule],
  templateUrl: './lista-espera.html',
  styleUrl: './lista-espera.scss',
})
export class ListaEspera {
  searchText = '';
  selectedFilter = 'todos';

  items: ListaEsperaItem[] = [
    {
      id: 1,
      nomePaciente: 'Maria Silva',
      prioridade: 'urgente',
      status: 'aguardando',
      servico: 'Consulta Cardiologia',
      profissional: 'Dr. João Silva',
      dataPreferia: '20/01/2026',
      horario: 'Manhã',
      diasEspera: 2,
      observacao: 'Paciente com quadro agudo, necessita atendimento prioritário',
    },
    {
      id: 2,
      nomePaciente: 'Ana Costa',
      prioridade: 'alta',
      status: 'contatado',
      servico: 'Avaliação Ortopédica',
      profissional: 'Dr. Pedro Oliveira',
      dataPreferia: '22/01/2026',
      horario: 'Tarde',
      diasEspera: 3,
      observacao: '',
    },
    {
      id: 3,
      nomePaciente: 'João Santos',
      prioridade: 'media',
      status: 'aguardando',
      servico: 'Retorno Pediatria',
      profissional: 'Qualquer profissional',
      dataPreferia: '18/01/2026',
      horario: '14:00-16:00',
      diasEspera: 1,
      observacao: '',
    },
    {
      id: 4,
      nomePaciente: 'Carlos Mendes',
      prioridade: 'baixa',
      status: 'confirmado',
      servico: 'Consulta Dermatologia',
      profissional: 'Dra. Rafaela Menezes',
      dataPreferia: '25/01/2026',
      horario: 'Qualquer',
      diasEspera: 5,
      observacao: '',
    },
    {
      id: 5,
      nomePaciente: 'Lucia Ferreira',
      prioridade: 'alta',
      status: 'aguardando',
      servico: 'Consulta Cardiologia',
      profissional: 'Dr. João Silva',
      dataPreferia: '21/01/2026',
      horario: 'Manhã',
      diasEspera: 2,
      observacao: 'Primeira consulta, paciente ansioso',
    },
  ];

  get itemsFiltrados(): ListaEsperaItem[] {
    return this.items.filter((item) => {
      const matchSearch =
        !this.searchText ||
        item.nomePaciente.toLowerCase().includes(this.searchText.toLowerCase()) ||
        item.servico.toLowerCase().includes(this.searchText.toLowerCase()) ||
        item.profissional.toLowerCase().includes(this.searchText.toLowerCase());

      const matchFilter =
        this.selectedFilter === 'todos' ||
        item.prioridade === this.selectedFilter;

      return matchSearch && matchFilter;
    });
  }

  getPrioridadeBadgeColor(prioridade: string): string {
    const colors: { [key: string]: string } = {
      urgente: 'urgente',
      alta: 'alta',
      media: 'media',
      baixa: 'baixa',
    };
    return colors[prioridade] || '';
  }

  getStatusBadgeColor(status: string): string {
    const colors: { [key: string]: string } = {
      aguardando: 'aguardando',
      contatado: 'contatado',
      confirmado: 'confirmado',
    };
    return colors[status] || '';
  }

  agendar(item: ListaEsperaItem): void {
    console.log('Agendando:', item);
  }

  verDetalhes(item: ListaEsperaItem): void {
    console.log('Ver detalhes:', item);
  }

  adicionarLista(): void {
    console.log('Adicionar à lista');
  }

  get totalItens(): number {
    return this.items.length;
  }

  get itensUrgentes(): number {
    return this.items.filter((i) => i.prioridade === 'urgente').length;
  }

  get itensAguardando(): number {
    return this.items.filter((i) => i.status === 'aguardando').length;
  }

  get itensContatados(): number {
    return this.items.filter((i) => i.status === 'contatado').length;
  }
}
