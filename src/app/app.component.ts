import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuDirective, MenuItemDirective, MenuTriggerDirective } from './directives';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuDirective, MenuItemDirective, MenuTriggerDirective],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
