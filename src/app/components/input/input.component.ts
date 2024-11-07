import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

type GamaInputAppearanceStyle = 'fill' | 'outline';
type GamaInputBorderRadiusStyle = 'primary' | 'secondary';

@Component({
  selector: 'GInput',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @ViewChild('prefixContainer', { static: false }) prefixContainer!: ElementRef;
  @ViewChild('suffixContainer', { static: false }) suffixContainer!: ElementRef;
  @ViewChild('errorContainer', { static: false }) errorContainer!: ElementRef;
  @ViewChild('hintContainer', { static: false }) hintContainer!: ElementRef;
  @ViewChild('inputControl', { static: false }) inputControl!: ElementRef<HTMLInputElement>;
  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {
  }
  @Input() label !: string;
  @Input() placeholder !: string;
  @Input() disabled : boolean = false;
  @Input() required : boolean = false;
  @Input() type : string = "text";
  @Input() readonly : boolean = false;
  @Input() autocomplete : string = "off";

  @Input() formControl !: UntypedFormControl;
  @Input() ngModel !: any;

  @Input() theme !: string;
  @Input() border : GamaInputBorderRadiusStyle = 'primary';
  @Input() appearance : GamaInputAppearanceStyle = 'outline';

  @Output() ngModelChange = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() input = new EventEmitter();

  hasPrefix : boolean = true;
  hasSuffix : boolean = true;
  hasError : boolean = true;
  hasHint : boolean = true;
  inputClass !: string;
  focused : boolean = false;

  ngOnInit(): void {
    if (this.formControl) {
      if (this.disabled) {
        this.formControl.disable();
      } else {
        this.formControl.enable();
      }
    }
  }
  ngAfterViewInit() {
    if (this.elementRef.nativeElement.hasAttribute('required')) {
      this.required = true
    }
    if (this.elementRef.nativeElement.hasAttribute('readonly')) {
      this.readonly = true
    }
    if (this.elementRef.nativeElement.hasAttribute('primary')) {
      this.border = 'primary';
    }else if (this.elementRef.nativeElement.hasAttribute('secondary')) {
      this.border = 'secondary';
    }
    if(this.elementRef.nativeElement.hasAttribute('fill')) {
      this.appearance = 'fill';
    }
    this.hasPrefix = this.prefixContainer.nativeElement.hasChildNodes();
    this.hasSuffix = this.suffixContainer.nativeElement.hasChildNodes();
    this.hasError = this.errorContainer.nativeElement.hasChildNodes();
    this.hasHint = this.hintContainer.nativeElement.hasChildNodes();
    if(this.hasError){
      this.hasHint = false;
    }
    this.cdr.detectChanges();
  }
  _focusInput(){
    if(!this.disabled){
      this.inputControl.nativeElement.focus();
    }
  }
  writeValue(value: string): void {
    this.ngModel = value ? value : ''
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
}
