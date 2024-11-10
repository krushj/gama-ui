import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';


type GamaCheckboxSize = 'small' | 'medium' | 'large';
type GamaCheckboxTheme = '' | 'info' | 'success' | 'warn' | 'alert';
type GamaCheckboxLabelPosition = 'before' | 'after';
type GamaCheckboxBorderRadiusStyle = 'primary' | 'secondary';

@Component({
  selector: 'GCheckbox',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent{
  @Input() title !: string;

  @Input() disabled : boolean = false;

  @Input() theme : GamaCheckboxTheme = '';

  @Input() size : GamaCheckboxSize = 'large'

  @Input() formControl !: UntypedFormControl;

  @Input() checked : boolean = false;

  @Input() label !: string;

  @Input() labelPosition : GamaCheckboxLabelPosition = 'after';

  @Input() border : GamaCheckboxBorderRadiusStyle = 'primary';
  
  @Output() onChange = new EventEmitter<any>();

  @ViewChild('checkbox') checkbox !: ElementRef<HTMLInputElement>;
  
  _change($event: any){
     this.onChange.emit({checked : $event.target.checked})
  }

  _toggleCheckbox() {
    if (this.checkbox && !this.disabled || (this.formControl && !this.formControl.disabled) ) { // Ensure the checkbox element exists and is not disabled
      this.checkbox.nativeElement.checked = !this.checkbox.nativeElement.checked;
      this._change({ target: this.checkbox.nativeElement }); // Trigger the change event
    }
  }
}
