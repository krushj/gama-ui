import { CdkMenuItem } from '@angular/cdk/menu';
import { Directive } from '@angular/core';

@Directive({
  selector: '[GMenuItem]',
  standalone: true,
  providers: [{ provide: CdkMenuItem, useExisting: MenuItemDirective }]
})
export class MenuItemDirective extends CdkMenuItem {}
