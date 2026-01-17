import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Sidebar } from '../../components/sidebar/sidebar';

interface Service {
  id: number;
  nome: string;
  categoria: string;
  duracao: number; // em minutos
  preco: number;
  profissionais: number;
  descricao: string;
  status: 'ativo' | 'inativo';
  tipo: 'Consulta' | 'Retorno' | 'Procedimento' | 'Avaliação';
}

@Component({
  selector: 'app-servicos',
  imports: [CommonModule, FormsModule, Sidebar, MatIcon, MatButtonModule],
  templateUrl: './servicos.html',
  styleUrl: './servicos.scss',
})
export class Servicos {
  searchText = '';
  selectedCategory = 'todas';
  selectedFilter = 'todos';

  categories = [
    { label: 'Todas as Categorias', value: 'todas' },
    { label: 'Cardiologia', value: 'cardiologia' },
    { label: 'Pediatria', value: 'pediatria' },
    { label: 'Ortopedia', value: 'ortopedia' },
    { label: 'Dermatologia', value: 'dermatologia' },
    { label: 'Ginecologia', value: 'ginecologia' },
  ];

  services: Service[] = [
    {
      id: 1,
      nome: 'Consulta Cardiologia',
      categoria: 'Cardiologia',
      duracao: 60,
      preco: 350,
      profissionais: 2,
      descricao: 'Consulta completa com cardiologista',
      status: 'ativo',
      tipo: 'Consulta',
    },
    {
      id: 2,
      nome: 'Retorno Cardiologia',
      categoria: 'Cardiologia',
      duracao: 30,
      preco: 180,
      profissionais: 2,
      descricao: 'Retorno para acompanhamento',
      status: 'ativo',
      tipo: 'Retorno',
    },
    {
      id: 3,
      nome: 'Consulta Pediatria',
      categoria: 'Pediatria',
      duracao: 45,
      preco: 280,
      profissionais: 1,
      descricao: 'Consulta pediátrica completa',
      status: 'ativo',
      tipo: 'Consulta',
    },
    {
      id: 4,
      nome: 'Avaliação Ortopédica',
      categoria: 'Ortopedia',
      duracao: 50,
      preco: 320,
      profissionais: 1,
      descricao: 'Avaliação ortopédica completa',
      status: 'ativo',
      tipo: 'Avaliação',
    },
    {
      id: 5,
      nome: 'Limpeza Dental',
      categoria: 'Procedimento',
      duracao: 40,
      preco: 150,
      profissionais: 3,
      descricao: 'Limpeza e profilaxia dental',
      status: 'ativo',
      tipo: 'Procedimento',
    },
    {
      id: 6,
      nome: 'Consulta Dermatologia',
      categoria: 'Dermatologia',
      duracao: 45,
      preco: 300,
      profissionais: 1,
      descricao: 'Avaliação dermatológica',
      status: 'inativo',
      tipo: 'Consulta',
    },
  ];

  get servicosFiltrados(): Service[] {
    return this.services.filter((service) => {
      const matchSearch = service.nome
        .toLowerCase()
        .includes(this.searchText.toLowerCase());

      const matchCategory =
        this.selectedCategory === 'todas' ||
        service.categoria.toLowerCase() === this.selectedCategory.toLowerCase();

      if (this.selectedFilter === 'todos')
        return matchSearch && matchCategory;
      if (this.selectedFilter === 'ativos')
        return matchSearch && matchCategory && service.status === 'ativo';
      if (this.selectedFilter === 'inativos')
        return matchSearch && matchCategory && service.status === 'inativo';

      return matchSearch && matchCategory;
    });
  }

  get totalServicos(): number {
    return this.services.length;
  }

  get servicosAtivos(): number {
    return this.services.filter(s => s.status === 'ativo').length;
  }

  get servicosInativos(): number {
    return this.services.filter(s => s.status === 'inativo').length;
  }

  get servicosSemProfissionais(): number {
    return this.services.filter(s => s.profissionais === 0).length;
  }

  novoServico() {
    console.log('Abrindo modal para novo serviço');
  }

  editarServico(service: Service) {
    console.log('Editando serviço:', service);
  }

  deletarServico(id: number) {
    console.log('Deletando serviço com ID:', id);
  }

  visualizarDetalhes(service: Service) {
    console.log('Visualizando detalhes do serviço:', service);
  }

  getTipoBadgeColor(tipo: string): string {
    const colors: { [key: string]: string } = {
      'Consulta': 'consulta',
      'Retorno': 'retorno',
      'Procedimento': 'procedimento',
      'Avaliação': 'avaliacao',
    };
    return colors[tipo] || 'consulta';
  }

  toggleStatus(service: Service) {
    service.status = service.status === 'ativo' ? 'inativo' : 'ativo';
    console.log('Status alterado para:', service.status);
  }
}
