import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  ngOnInit() {

  }

  toggleSidebar() {
    const body = document.querySelector('body');
    body?.classList.toggle('toggle-sidebar');
  }

}
