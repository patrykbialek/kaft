import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  menus = [
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'Industries',
      link: '/industries',
    },
    {
      name: 'Case studies',
      link: '/case-studies',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Contact us',
      link: '#contact_us',
      isLocalLink: true,
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
