import { CdkMenuTrigger } from '@angular/cdk/menu';
import { Directive, Input } from '@angular/core';
@Directive({
  selector: '[GMenuTrigger]',
  standalone: true,
  providers: [{ provide: CdkMenuTrigger, useExisting: MenuTriggerDirective }]
})
export class MenuTriggerDirective extends CdkMenuTrigger{

  @Input('GMenuTrigger') get cdkMenuTriggerFor() {
    return this._menuTemplate;
  }
  set cdkMenuTriggerFor(value: any) {
    this._menuTemplate = value;
  }
  private _menuTemplate!: any;

}
