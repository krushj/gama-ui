import { Component, Input } from '@angular/core';
import { Style } from '@gama/interface';


@Component({
  selector: 'GIcon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input()
  type: string = 'symbols';
  
  @Input()
  name: string | null = null;

  @Input()
  style: Style = {};
}
