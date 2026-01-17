import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../components/sidebar/sidebar';
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';

interface Cliente {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  ultimaConsulta: string;
  status: 'ativo' | 'inativo';
}

@Component({
  selector: 'app-clientes',
  imports: [CommonModule, FormsModule, Sidebar, MatIcon, MatButtonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.scss',
})
export class Clientes {
  searchText = '';
  selectedFilter = 'todos';

  clientes: Cliente[] = [
    {
      id: 1,
      nome: 'Ana Oliveira',
      cpf: '123.456.789-01',
      telefone: '(11) 98765-1001',
      email: 'ana@email.com',
      ultimaConsulta: '14/01/2026',
      status: 'ativo'
    },
    {
      id: 2,
      nome: 'Carlos Santos',
      cpf: '987.654.321-00',
      telefone: '(11) 98765-2002',
      email: 'carlos@email.com',
      ultimaConsulta: '13/01/2026',
      status: 'ativo'
    },
    {
      id: 3,
      nome: 'Maria Silva',
      cpf: '456.789.123-45',
      telefone: '(11) 98765-3003',
      email: 'maria@email.com',
      ultimaConsulta: '12/01/2026',
      status: 'ativo'
    },
    {
      id: 4,
      nome: 'João Pereira',
      cpf: '321.654.987-00',
      telefone: '(11) 98765-4004',
      email: 'joao@email.com',
      ultimaConsulta: '11/01/2026',
      status: 'ativo'
    },
    {
      id: 5,
      nome: 'Fernanda Costa',
      cpf: '159.753.486-20',
      telefone: '(11) 98765-5005',
      email: 'fernanda@email.com',
      ultimaConsulta: '10/01/2026',
      status: 'ativo'
    }
  ];

  get clientesFiltrados(): Cliente[] {
    return this.clientes.filter(cliente => {
      const matchSearch = 
        cliente.nome.toLowerCase().includes(this.searchText.toLowerCase()) ||
        cliente.cpf.includes(this.searchText) ||
        cliente.telefone.includes(this.searchText) ||
        cliente.email.toLowerCase().includes(this.searchText.toLowerCase());

      if (this.selectedFilter === 'todos') return matchSearch;
      if (this.selectedFilter === 'ativos')
        return matchSearch && cliente.status === 'ativo';
      if (this.selectedFilter === 'inativos')
        return matchSearch && cliente.status === 'inativo';

      return matchSearch;
    });
  }

  get totalClientes(): number {
    return this.clientes.length;
  }

  get clientesAtivos(): number {
    return this.clientes.filter(c => c.status === 'ativo').length;
  }

  get clientesInativos(): number {
    return this.clientes.filter(c => c.status === 'inativo').length;
  }

  get clientesComConsulta(): number {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return this.clientes.filter(c => {
      const [dia, mes, ano] = c.ultimaConsulta.split('/').map(Number);
      const dataConsulta = new Date(ano, mes - 1, dia);
      dataConsulta.setHours(0, 0, 0, 0);
      return dataConsulta >= new Date(new Date().setDate(new Date().getDate() - 30));
    }).length;
  }

  novoCliente(): void {
    console.log('Criar novo cliente');
  }

  editarCliente(cliente: Cliente): void {
    console.log('Editar cliente:', cliente);
  }

  deletarCliente(id: number): void {
    this.clientes = this.clientes.filter(c => c.id !== id);
    console.log('Cliente deletado');
  }

  visualizarDetalhes(cliente: Cliente): void {
    console.log('Visualizar detalhes:', cliente);
  }

  toggleStatus(cliente: Cliente): void {
    cliente.status = cliente.status === 'ativo' ? 'inativo' : 'ativo';
    console.log('Status alterado para:', cliente.status);
  }
}
