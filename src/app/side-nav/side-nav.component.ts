import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean=false;

  list=[
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',

    },
    {
      number: '2',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
    },
    {
      number: '3',
      name: 'Contact Us',
      icon: 'fa-solid fa-phone',
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
