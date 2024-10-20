import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@componenets/icon/icon.component';
import { Style } from '@interface/style';


@Component({
  selector: 'Button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  title : string = '';

  @Input()
  style : Style = {};

  @Input()
  disabled : boolean = false;

  @Input()
  buttonType : string = 'primary'

  @Input()
  buttonSize : string = 'medium'

  @Input()
  color : string = 'white'

  buttonClass : string = '';

  ngOnInit(): void {
    this.buttonClass = `gama-${this.color}-${this.buttonType}-${this.buttonSize}-button`
  }

  @Output() onClick = new EventEmitter<MouseEvent>();
}
