import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Exam', icon: 'pi pi-fw pi-home', routerLink:'home'},
      {label: 'Create Question', icon: 'pi pi-fw pi-file', routerLink:'createQuestion'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
  }

}
