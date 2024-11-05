import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'GDateRangePicker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ButtonComponent, ButtonComponent, IconComponent],
  providers: [DatePipe],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnChanges{
  fromDate: Date | null = null;
  toDate: Date | null = null;
  activeTab: 'from' | 'to' = 'from';
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  calendarDays: number[] = [];
  hoveredDate: Date | null = null; // Track hovered date
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  defaultIconButtonStyle = {
    style: {'box-shadow': 'none', color: '#333333'},
    iconStyle: {fontSize: '1rem'}
  }
  dateFormat : string = 'MM/dd/yyyy';

  @Input()
  date : {from: Date | null,  to: Date | null} = {from : null, to: null};

  @Output() emitSaveEvent = new EventEmitter<{from : Date | null, to : Date | null}>();

  // following properties defines the range for given date
  @Input() min !: Date;
  @Input() max !: Date;

  constructor(private datePipe: DatePipe) {
    this.generateCalendar();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['date'] && changes['date'].currentValue){
      this.fromDate = changes['date'].currentValue.from;
      this.toDate = changes['date'].currentValue.to;
    }
  }
  
  toggleTab(tab: 'from' | 'to') {
    this.activeTab = tab;
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
    const selectedDate = new Date(this.currentYear, this.currentMonth, day);
    if (this.activeTab === 'from') {
      this.fromDate = selectedDate;
      if (this.toDate && this.fromDate > this.toDate) {
        this.toDate = null;
      }
    } else {
      this.toDate = selectedDate;
      if (this.fromDate && this.toDate < this.fromDate) {
        this.fromDate = null;
      }
    }
  }
  save() {
    this.emitSaveEvent.emit({from: this.fromDate, to: this.toDate});
  }

  isDisabledDate(date: number) {
    return (this.activeTab === 'to' && this.fromDate && new Date(this.currentYear, this.currentMonth, date) < this.fromDate) ||
      (this.activeTab === 'from' && this.toDate && new Date(this.currentYear, this.currentMonth, date) > this.toDate) ||
      (this.min && new Date(this.currentYear, this.currentMonth, date) < this.min) || 
            (this.max && new Date(this.currentYear, this.currentMonth, date) > this.max)
  }

  // Listen for keydown events
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    // Check for save action with Ctrl (Windows) or Cmd (Mac)
    if (event.ctrlKey && event.key === 's' && this.fromDate && this.toDate) {
      event.preventDefault(); // Prevent default save action
      this.save();
    }

    // Check for left arrow key with Ctrl (Windows) or Cmd (Mac)
    if ((isMac ? event.metaKey : event.ctrlKey) && event.key === 'ArrowLeft') {
      event.preventDefault(); // Prevent default action
      this.changeMonth(-1);
    }

    // Check for right arrow key with Ctrl (Windows) or Cmd (Mac)
    if ((isMac ? event.metaKey : event.ctrlKey) && event.key === 'ArrowRight') {
      event.preventDefault(); // Prevent default action
      this.changeMonth(1);
    }

    // Check for Ctrl + Tab to change date tab
    if (event.altKey && event.key === 'Tab') {
      event.preventDefault(); // Prevent default tabbing action
      this.toggleTab(this.activeTab === 'from' ? 'to' : 'from'); // Call your function to change the date tab
    }
  }

  isInRange(date: number): boolean {
    const currentDate = new Date(this.currentYear, this.currentMonth, date);
    if (this.fromDate && this.hoveredDate && this.activeTab !== 'from') {
      return currentDate >= this.fromDate && currentDate <= this.hoveredDate;
    }
    if (this.toDate && this.hoveredDate && this.activeTab !== 'to') {
      return currentDate >= this.hoveredDate && currentDate <= this.toDate;
    }
    if (this.fromDate && this.toDate) {
      return currentDate >= this.fromDate && currentDate <= this.toDate;
    }
    return false;
  }

  onDateHover(date: number) {
    this.hoveredDate = new Date(this.currentYear, this.currentMonth, date);
  }

  onDateLeave() {
    this.hoveredDate = null; // Reset the hovered date
  }

  dateEntered(value: string){
    try {
      const newDate = new Date(value);
      this.datePipe.transform(newDate);
    
      this.currentMonth = newDate.getMonth();
      this.currentYear = newDate.getFullYear();
      if(this.activeTab === 'from'){
        this.fromDate = newDate;
      }else{
        this.toDate = newDate;
      }
      this.generateCalendar();
    } catch (error) {
      if(this.activeTab === 'from'){
        this.fromDate = null;
      }else{
        this.toDate = null;
      }
    }
  }
  onKeydown(event: any){
    if (event.key === 'Enter') {
      this.dateEntered(event.target?.value as string);
    }
  }
}
