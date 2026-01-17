import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Sidebar } from '../../components/sidebar/sidebar';

interface Professional {
  id: number;
  nome: string;
  especialidade: string;
  telefone: string;
  email: string;
  status: 'ativo' | 'inativo';
  acessoSistema: boolean;
}

@Component({
  selector: 'app-profissionais',
  imports: [CommonModule, FormsModule, Sidebar, MatIcon, MatButtonModule],
  templateUrl: './profissionais.html',
  styleUrl: './profissionais.scss',
})
export class Profissionais {
  searchText = '';
  selectedFilter = 'todos';
  selectedEspecialidade = 'todas';

  especialidades = [
    { label: 'Todas as Especialidades', value: 'todas' },
    { label: 'Cardiologia', value: 'cardiologia' },
    { label: 'Pediatria', value: 'pediatria' },
    { label: 'Ortopedia', value: 'ortopedia' },
    { label: 'Dermatologia', value: 'dermatologia' },
    { label: 'Ginecologia', value: 'ginecologia' },
  ];

  professionals: Professional[] = [
    {
      id: 1,
      nome: 'Dr. João Silva',
      especialidade: 'Cardiologia',
      telefone: '(11) 98765-1001',
      email: 'joao.silva@clinica.com',
      status: 'ativo',
      acessoSistema: true,
    },
    {
      id: 2,
      nome: 'Dra. Maria Santos',
      especialidade: 'Pediatria',
      telefone: '(11) 98765-2002',
      email: 'maria.santos@clinica.com',
      status: 'ativo',
      acessoSistema: true,
    },
    {
      id: 3,
      nome: 'Dr. Pedro Oliveira',
      especialidade: 'Ortopedia',
      telefone: '(11) 98765-3003',
      email: 'pedro.oliveira@clinica.com',
      status: 'ativo',
      acessoSistema: false,
    },
    {
      id: 4,
      nome: 'Dra. Rafaela Menezes',
      especialidade: 'Dermatologia',
      telefone: '(11) 98765-4004',
      email: 'rafaela.menezes@clinica.com',
      status: 'inativo',
      acessoSistema: false,
    },
    {
      id: 5,
      nome: 'Dra. Juliana Pacheco',
      especialidade: 'Ginecologia',
      telefone: '(11) 98765-5005',
      email: 'juliana.pacheco@clinica.com',
      status: 'ativo',
      acessoSistema: true,
    },
  ];

  get profissionaisFiltrados(): Professional[] {
    return this.professionals.filter((prof) => {
      const matchSearch =
        prof.nome.toLowerCase().includes(this.searchText.toLowerCase()) ||
        prof.especialidade
          .toLowerCase()
          .includes(this.searchText.toLowerCase());

      const matchEspecialidade =
        this.selectedEspecialidade === 'todas' ||
        prof.especialidade.toLowerCase() === this.selectedEspecialidade.toLowerCase();

      if (this.selectedFilter === 'todos')
        return matchSearch && matchEspecialidade;
      if (this.selectedFilter === 'ativos')
        return matchSearch && matchEspecialidade && prof.status === 'ativo';
      if (this.selectedFilter === 'inativos')
        return matchSearch && matchEspecialidade && prof.status === 'inativo';

      return matchSearch && matchEspecialidade;
    });
  }

  get totalProfissionais(): number {
    return this.professionals.length;
  }

  get profissionaisAtivos(): number {
    return this.professionals.filter(p => p.status === 'ativo').length;
  }

  get profissionaisInativos(): number {
    return this.professionals.filter(p => p.status === 'inativo').length;
  }

  get profissionaisSemAcesso(): number {
    return this.professionals.filter(p => !p.acessoSistema).length;
  }

  novoProfissional() {
    console.log('Abrindo modal para novo profissional');
  }

  editarProfissional(professional: Professional) {
    console.log('Editando profissional:', professional);
  }

  deletarProfissional(id: number) {
    console.log('Deletando profissional com ID:', id);
  }

  visualizarDetalhes(professional: Professional) {
    console.log('Visualizando detalhes do profissional:', professional);
  }

  toggleStatus(professional: Professional) {
    professional.status = professional.status === 'ativo' ? 'inativo' : 'ativo';
    console.log('Status alterado para:', professional.status);
  }
}
