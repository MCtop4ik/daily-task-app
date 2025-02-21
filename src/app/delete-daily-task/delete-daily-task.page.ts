import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-delete-daily-task',
  templateUrl: './delete-daily-task.page.html',
  styleUrls: ['./delete-daily-task.page.scss'],
  standalone: false
})
export class DeleteDailyTaskPage implements OnInit {
  tasks = [];
  id = 0;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.httpService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask() {
    this.httpService.deleteTask(this.id).subscribe();
  }

}
