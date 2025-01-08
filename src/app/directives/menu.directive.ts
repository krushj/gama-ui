import { Directive } from '@angular/core';
import { CdkMenu } from '@angular/cdk/menu';

@Directive({
  selector: '[GMenu]',
  standalone: true,
  providers: [{ provide: CdkMenu, useExisting: MenuDirective }]
})
export class MenuDirective extends CdkMenu {}