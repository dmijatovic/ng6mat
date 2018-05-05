import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './app-layout-page.html',
  styleUrls: ['./app-layout-page.scss'],
  host:{
    "class":"app-page"
  }
})
export class AppLayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
