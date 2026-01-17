import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../components/sidebar/sidebar';
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

interface Professional {
  id: number;
  name: string;
  specialty: string;
}

interface TimeSlot {
  time: string;
  hour: number;
}

interface Appointment {
  professionalId: number;
  startTime: string;
  endTime: string;
  title: string;
  status: 'blocked' | 'scheduled' | 'available';
}

@Component({
  selector: 'app-agenda',
  imports: [
    CommonModule,
    FormsModule,
    Sidebar,
    MatIcon,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './agenda.html',
  styleUrl: './agenda.scss',
})
export class Agenda {
  selectedDate = new Date();
  selectedView: 'day' | 'week' = 'day';
  selectedProfessional = 'todos';

  professionals: Professional[] = [
    { id: 1, name: 'Dr. João Silva', specialty: 'Cardiologia' },
    { id: 2, name: 'Dra. Maria Santos', specialty: 'Pediatria' },
    { id: 3, name: 'Dr. Pedro Oliveira', specialty: 'Ortopedia' },
    { id: 4, name: 'Dra. Rafaela Menezes Silva', specialty: 'Dermatologia' },
    { id: 5, name: 'Dra. Juliana Pacheco R', specialty: 'Ginecologia' }
  ];

  timeSlots: TimeSlot[] = [
    { time: '08:00', hour: 8 },
    { time: '08:30', hour: 8.5 },
    { time: '09:00', hour: 9 },
    { time: '09:30', hour: 9.5 },
    { time: '10:00', hour: 10 },
    { time: '10:30', hour: 10.5 },
    { time: '11:00', hour: 11 },
    { time: '11:30', hour: 11.5 },
    { time: '12:00', hour: 12 },
    { time: '12:30', hour: 12.5 },
    { time: '13:00', hour: 13 },
    { time: '13:30', hour: 13.5 },
    { time: '14:00', hour: 14 },
    { time: '14:30', hour: 14.5 },
    { time: '15:00', hour: 15 },
    { time: '15:30', hour: 15.5 },
    { time: '16:00', hour: 16 },
    { time: '16:30', hour: 16.5 },
    { time: '17:00', hour: 17 },
    { time: '17:30', hour: 17.5 },
    { time: '18:00', hour: 18 }
  ];

  appointments: Appointment[] = [
    {
      professionalId: 1,
      startTime: '12:00',
      endTime: '14:00',
      title: 'Bloqueado',
      status: 'blocked'
    },
    {
      professionalId: 1,
      startTime: '17:00',
      endTime: '18:30',
      title: 'Bloqueado',
      status: 'blocked'
    }
  ];

  formatDate(date: Date): string {
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
  }

  getWeekDays(): Date[] {
    const weekDays: Date[] = [];
    const currentDate = new Date(this.selectedDate);
    
    // Encontrar o início da semana (domingo)
    const dayOfWeek = currentDate.getDay();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - dayOfWeek);
    
    // Gerar 7 dias da semana
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }
    
    return weekDays;
  }

  getDayName(date: Date): string {
    const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    return days[date.getDay()];
  }

  getDayNumber(date: Date): number {
    return date.getDate();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  changeDate(days: number): void {
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() + days);
    this.selectedDate = newDate;
  }

  goToToday(): void {
    this.selectedDate = new Date();
  }

  setView(view: 'day' | 'week'): void {
    this.selectedView = view;
  }

  newAppointment(): void {
    console.log('Criar novo agendamento');
    // Implementar modal ou navegar para página de criação
  }

  recoverSchedule(): void {
    console.log('Recuperar horário');
    // Implementar funcionalidade de recuperação
  }

  getAppointmentStyle(appointment: Appointment): any {
    const startHour = this.parseTime(appointment.startTime);
    const endHour = this.parseTime(appointment.endTime);
    const duration = endHour - startHour;
    
    // Cada slot tem 60px de altura (30min = 60px, então 1h = 120px)
    const top = (startHour - 8) * 120; // 8 é a hora inicial
    const height = duration * 120;

    return {
      top: `${top}px`,
      height: `${height}px`
    };
  }

  private parseTime(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60;
  }

  getAppointmentsForProfessional(professionalId: number): Appointment[] {
    return this.appointments.filter(apt => apt.professionalId === professionalId);
  }
}
