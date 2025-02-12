import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationMainPage } from './organization-main.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizationMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationMainPageRoutingModule {}
