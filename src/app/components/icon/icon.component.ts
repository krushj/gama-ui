import { Component, Input } from '@angular/core';
import { Style } from '@interface/style';


@Component({
  selector: 'icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  private _iconType: string = 'symbols';
  private _iconName: string | null = null;
  private _iconStyle: Style = {};
  @Input()
  set type(value: string){
    if (value !== 'icons') {
      throw new Error(`Invalid icon type: ${value}. Default value is Symbols, Allowed values are 'icons' or 'symbols'.`);
    }
    this._iconType = value;
  }
  get type(): string {
    return this._iconType;
  }

  @Input()
  set name(value: string){
    if (!value) {
      throw new Error(`Please provide the icon name.`);
    }
    this._iconName = value;
  }
  get name(): string | null {
    return this._iconName;
  }

  @Input()
  set style(value: Style){
    this._iconStyle = value;
  }
  get style(): Style {
    return this._iconStyle;
  }
  
}
