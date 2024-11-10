import { Component, Input } from '@angular/core';
import { Style } from '@gama-ui/interface';


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
  
  @Input({required: true})
  name: string | null = null;

  @Input()
  style: Style = {};
}
