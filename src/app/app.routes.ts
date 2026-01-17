import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'agenda',
        loadComponent: () => import('./pages/agenda/agenda').then(m => m.Agenda)
    },
    {
        path: 'clientes',
        loadComponent: () => import('./pages/clientes/clientes').then(m => m.Clientes)
    },
    {
        path: 'profissionais',
        loadComponent: () => import('./pages/profissionais/profissionais').then(m => m.Profissionais)
    },
    {
        path: 'servicos',
        loadComponent: () => import('./pages/servicos/servicos').then(m => m.Servicos)
    },
    {
        path: 'lista-espera',
        loadComponent: () => import('./pages/lista-espera/lista-espera').then(m => m.ListaEspera)
    },
    {
        path: 'relatorios',
        loadComponent: () => import('./pages/relatorios/relatorios').then(m => m.Relatorios)
    }
];
