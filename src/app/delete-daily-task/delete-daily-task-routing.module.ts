import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteDailyTaskPage } from './delete-daily-task.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteDailyTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteDailyTaskPageRoutingModule {}
