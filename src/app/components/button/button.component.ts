import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Icon, Style } from '@gama/interface';

type GamaButtonType = 'primary' | 'secondary' | 'tertiary';
type GamaButtonSize = 'small' | 'medium' | 'large';
type GamaButtonTheme = '' | 'info' | 'success' | 'warn' | 'alert';
type GamaIconType = 'symbols' | 'icons';

@Component({
  selector: 'GButton',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  
  @Input() title !: string;

  @Input() style : Style = {};

  @Input() disabled : boolean = false;

  @Input() type : GamaButtonType = 'primary'

  @Input() theme : GamaButtonTheme = '';

  @Input() size : GamaButtonSize = 'large'

  @Input() iconButton : boolean | string = false;
  
  @Input() prefixIcon !: Icon;
  
  @Input() suffixIcon !: Icon;
  
  @Input() iconType: GamaIconType = 'symbols';
  
  @Input() iconName: string | null = null;
  
  @Input() iconStyle: Style = {};
  
  @Output() onClick = new EventEmitter<any>();
  
  gamaButtonClass : string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.gamaButtonClass = `gama-button ${this.theme} ${this.type} ${this.size}`;
    if(this.elementRef.nativeElement.hasAttribute('iconButton')){
      this.iconButton = true;
    }
  }
}
