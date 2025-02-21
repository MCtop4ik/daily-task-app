import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDailyTaskPage } from './create-daily-task.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDailyTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDailyTaskPageRoutingModule {}
