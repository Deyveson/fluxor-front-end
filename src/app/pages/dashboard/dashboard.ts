import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule, 
    FormsModule, 
    RouterOutlet, 
    Sidebar, 
    MatIcon, 
    MatButtonModule, 
    MatMenuModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  userName = 'Igor Rogério Freitas';
  userInitials = 'IR';
  
  // Filtros
  selectedPeriod = 'ultimos-7-dias';
  selectedProfessional = 'todos';
  
  periods = [
    { value: 'ultimos-7-dias', label: 'Últimos 7 dias' },
    { value: 'ultimos-30-dias', label: 'Últimos 30 dias' },
    { value: 'este-mes', label: 'Este mês' },
  ];
  
  professionals = [
    { value: 'todos', label: 'Todos' },
    { value: 'dra-ana', label: 'Dra. Ana Silva' },
    { value: 'dr-carlos', label: 'Dr. Carlos Santos' },
  ];

  constructor(private readonly router: Router) {}

  goToProfile(): void {
    console.log('Navegar para perfil');
  }

  logout(): void {
    console.log('Fazendo logout...');
    // Aqui você pode limpar tokens, sessão, etc.
    this.router.navigate(['/login']);
  }

  applyFilters(): void {
    console.log('Filtros aplicados:', {
      periodo: this.selectedPeriod,
      profissional: this.selectedProfessional
    });
    // Aqui você pode fazer a chamada à API com os filtros
  }
}
