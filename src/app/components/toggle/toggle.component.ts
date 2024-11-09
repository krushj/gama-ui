import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';


type GamaToggleSize = 'small' | 'medium' | 'large';
type GamaToggleTheme = '' | 'info' | 'success' | 'warn' | 'alert';

@Component({
  selector: 'GToggle',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss'
})
export class ToggleComponent {
  @Input() title !: string;

  @Input() disabled : boolean = false;

  @Input() theme : GamaToggleTheme = '';

  @Input() size : GamaToggleSize = 'large'

  @Input() formControl !: UntypedFormControl;

  @Input() checked : boolean = false;

  @Input() beforeLabel !: string;

  @Input() afterLabel !: string;
  
  @Output() onChange = new EventEmitter<any>();

  @ViewChild('checkbox') checkbox !: ElementRef<HTMLInputElement>;
  
  _change($event: any){
     this.onChange.emit({checked : $event.target.checked})
  }

  _toggleCheckbox(positionFlag: boolean) {
    if (this.checkbox && this.beforeLabel && this.afterLabel && !this.disabled || (this.formControl && !this.formControl.disabled) ) { // Ensure the checkbox element exists and is not disabled
      this.checkbox.nativeElement.checked = positionFlag;
      this._change({ target: this.checkbox.nativeElement }); // Trigger the change event
    }
  }
}
