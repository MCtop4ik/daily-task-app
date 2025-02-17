import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.page.html',
  styleUrls: ['./admin-projects.page.scss'],
  standalone: false,
})
export class AdminProjectsPage implements OnInit {

  constructor() {
    this.checkDarkMode();
  }
  
  ngOnInit() {
  }


  checkDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
}
