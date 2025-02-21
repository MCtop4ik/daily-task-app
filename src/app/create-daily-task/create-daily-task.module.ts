import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDailyTaskPageRoutingModule } from './create-daily-task-routing.module';

import { CreateDailyTaskPage } from './create-daily-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDailyTaskPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateDailyTaskPage]
})
export class CreateDailyTaskPageModule {}
