import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteDailyTaskPageRoutingModule } from './delete-daily-task-routing.module';

import { DeleteDailyTaskPage } from './delete-daily-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteDailyTaskPageRoutingModule
  ],
  declarations: [DeleteDailyTaskPage]
})
export class DeleteDailyTaskPageModule {}
