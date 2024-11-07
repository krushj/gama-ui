import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent, InputComponent } from '@gama/components';

@Component({
  selector: 'input-view',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FormsModule],
  templateUrl: './input-view.component.html',
})
export class InputViewComponent {
  title: string = ''
}
