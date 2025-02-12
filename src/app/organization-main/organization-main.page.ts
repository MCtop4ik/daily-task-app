import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organization-main',
  templateUrl: './organization-main.page.html',
  styleUrls: ['./organization-main.page.scss'],
  standalone: false
})
export class OrganizationMainPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
