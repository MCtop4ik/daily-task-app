import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { MathJaxService } from '../services/mathjax.service';

type Organization = {
  id: number;
  name: string;
  tag: string;
  description: string;
};

type Task = {
  id: number;
  task: string;
  date: string;
  solution: string;
  image: string;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  @ViewChild('mathContent') mathContent!: ElementRef;
  organizations: Array<Organization>;
  dailyTasks: Array<Task> = [];

  constructor(
    private router: Router,
    private httpService: HttpService,
    private mathJaxService: MathJaxService
  ) {
    this.organizations = [
      { id: 1, name: 'Senya Zakharov', tag: 'senyazak', description: 'hihjijijjii' },
      { id: 2, name: 'Andrew', tag: 'djcooki', description: 'hihjijijjii' },
    ];
  }

  ngOnInit(): void {
    this.httpService.getTasks().subscribe((tasks: any) => {
      this.dailyTasks = tasks;
    });
  }

  ngAfterViewInit() {
    this.updateMath();
  }

  updateMath() {
    setTimeout(() => {
      if (this.mathContent) {
        this.mathJaxService.renderMath(this.mathContent.nativeElement);
      }
    }, 100);
  }

  toggleSpoiler(element: any) {
    element.classList.toggle('revealed');
  }

  onOrganizationClick(tag: string) {
    this.router.navigate(['organization', tag, 'main']);
  }

  getAvailableTasks() {
    const today = new Date();
    return this.dailyTasks.filter((task) => {
      const taskDate = new Date(task.date.split('/').reverse().join('-'));
      return taskDate <= today;
    });
  }
}