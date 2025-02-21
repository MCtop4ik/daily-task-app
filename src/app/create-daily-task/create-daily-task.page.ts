import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-daily-task',
  templateUrl: './create-daily-task.page.html',
  styleUrls: ['./create-daily-task.page.scss'],
  standalone: false
})
export class CreateDailyTaskPage implements OnInit {
  form: FormGroup;

  constructor(private httpService: HttpService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      firstField: ['', Validators.required],
      secondField: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createTask(task: string, date: string) {
    this.httpService.createTask(task, date).subscribe();
  }

  onSubmit() {
    if (this.form.valid) {
      let data = this.form.value;
      this.createTask(data['firstField'], data['secondField'])
    }
  }

}
