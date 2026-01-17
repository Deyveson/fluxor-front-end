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
  imports: [CommonModule, FormsModule, RouterOutlet, Sidebar, MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  userName = 'Igor Rogério Freitas';
  userInitials = 'IR';
  patientName = '';
  generatedLink = 'https://clinica.app/cliente/';

  constructor(private router: Router) {}

  goToProfile(): void {
    console.log('Navegar para perfil');
    // this.router.navigate(['/perfil']);
  }

  logout(): void {
    console.log('Fazendo logout...');
    // Aqui você pode limpar tokens, sessão, etc.
    this.router.navigate(['/login']);
  }

  copyLink(): void {
    navigator.clipboard.writeText(this.generatedLink);
    console.log('Link copiado!');
    // Aqui você pode adicionar um feedback visual (toast/snackbar)
  }

  shareWhatsApp(): void {
    const message = encodeURIComponent(`Olá! Aqui está o link para acessar sua área do cliente: ${this.generatedLink}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  shareEmail(): void {
    const subject = encodeURIComponent('Acesso à Área do Cliente');
    const body = encodeURIComponent(`Olá,\n\nAqui está o link para acessar sua área do cliente:\n${this.generatedLink}\n\nAtenciosamente,\nEquipe Fluxor`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }
}
