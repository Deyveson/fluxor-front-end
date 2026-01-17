import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterOutlet, Sidebar, MatIcon, MatButtonModule, MatMenuModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  userName = 'Igor Rogério Freitas';
  userInitials = 'IR';

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
}
