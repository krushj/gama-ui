import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@componenets/icon/icon.component';
import { Style } from '@interface/style';


@Component({
  selector: 'IconButton',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
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

  iconClass : string = '';

  @Input()
  iconType: string = 'symbols';
  
  @Input()
  iconName: string | null = null;

  @Input()
  iconStyle: Style = {};


  ngOnInit(): void {
    this.iconClass = `gama-icon ${this.color}-${this.buttonType}-${this.buttonSize}-icon`
  }

  @Output() onClick = new EventEmitter<any>();
}
