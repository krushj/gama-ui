import { Component } from '@angular/core';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent {
  selectedDate: Date | null = null;
  isCalendarVisible = false;

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();

  days: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];

  calendarDays: number[] = [];

  constructor() {
    this.generateCalendar();
  }

  toggleCalendar() {
    this.isCalendarVisible = !this.isCalendarVisible;
  }

  changeMonth(offset: number) {
    this.currentMonth += offset;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }

  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push(0); // empty slots for alignment
    }
    for (let i = 1; i <= lastDate; i++) {
      this.calendarDays.push(i);
    }
  }

  selectDate(day: number) {
    if (day > 0) {
      this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
      this.isCalendarVisible = false;
    }
  }
}
