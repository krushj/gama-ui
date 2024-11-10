import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  pages = [
    {title: 'Input', link: '/components/input'},
    {title: 'Button', link: '/components/button'},
    {title: 'Toggle', link: '/components/toggle'},
    {title: 'Checkbox', link: '/components/checkbox'},
  ] 
  
}
