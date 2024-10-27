import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { Style } from '@gama/interface';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from "../button/button.component";
@Component({
  selector: 'DatePicker',
  standalone: true,
  imports: [DatePipe, ButtonComponent, IconButtonComponent, IconComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() formControl!: UntypedFormControl;
  @Input() ngModel !: Date | null;
  @Input() dateFormat: string = 'mm/dd/yyyy';
  @Input() label!: string;
  @Input() placeholder: string = this.dateFormat;
  @Input() disabled: boolean = false;

  @Input() hideIcon: boolean = false;
  @Input() iconName: string = 'calendar_today';
  @Input() iconPosition: string = 'before';
  @Input() iconStyle: Style = {fontSize: '14px'}


  @Output() ngModelChange = new EventEmitter<Date | null>();
  @Output() focus = new EventEmitter<FocusEvent>();
  @Output() blur = new EventEmitter<FocusEvent>();
  @Output() input = new EventEmitter<Event>();

  selectedDate: Date | null = null;
  isCalendarVisible = false;

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  
  days: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  calendarDays: number[] = [];

  constructor(private elementRef: ElementRef) {
    this.generateCalendar();
  }

  ngOnInit() {
    // Set the initial selected date from the ngModel or formControl
    if (this.formControl) {
      this.disabled = this.formControl.disabled;
      this.formControl.valueChanges.subscribe((date: Date | null) => {
        this.selectedDate = date;
      });
    }
  }

  toggleCalendar() {
    if (!this.disabled) {
      this.isCalendarVisible = !this.isCalendarVisible; // Only toggle if not disabled
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isCalendarVisible = false;
    }
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

    this.calendarDays = Array(firstDay).fill(0).concat(Array.from({ length: lastDate }, (_, i) => i + 1));
  }

  selectDate(day: number) {
    if (day > 0) {
      this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
      this.isCalendarVisible = false;
      if(this.ngModel){
        this.ngModelChange.emit(this.selectedDate); // Emit formatted date
      }
      if (this.formControl) {
        this.formControl.setValue(this.selectedDate); // Update formControl
      }
    }
  }

  isToday(day: number): boolean {
    if (!this.selectedDate) return false;
    const today = new Date();
    return today.getFullYear() === this.currentYear && today.getMonth() === this.currentMonth && today.getDate() === day;
  }

  isSelectedDate(day: number): boolean {
    if (!this.selectedDate) return false;
    return this.selectedDate.getFullYear() === this.currentYear &&
           this.selectedDate.getMonth() === this.currentMonth &&
           this.selectedDate.getDate() === day;
  }
}
