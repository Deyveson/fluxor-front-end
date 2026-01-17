import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems: MenuItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Agenda', icon: 'calendar_today', route: '/agenda' },
    { label: 'Pacientes', icon: 'people', route: '/pacientes' },
    { label: 'Profissionais', icon: 'medical_services', route: '/profissionais' },
    { label: 'Fórmulas', icon: 'science', route: '/formulas' },
    { label: 'Relatórios', icon: 'assessment', route: '/relatorios' },
    { label: 'Lista de Espera', icon: 'schedule', route: '/lista-espera' }
  ];

  bottomMenuItems: MenuItem[] = [
    { label: 'Configurações', icon: 'settings', route: '/configuracoes' }
  ];
}
