import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationMainPageRoutingModule } from './organization-main-routing.module';

import { OrganizationMainPage } from './organization-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizationMainPageRoutingModule
  ],
  declarations: [OrganizationMainPage] 
})
export class OrganizationMainPageModule {}
