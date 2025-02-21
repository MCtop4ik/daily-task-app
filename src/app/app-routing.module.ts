import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'organization/:organization-title/main',
    loadChildren: () => import('./organization-main/organization-main.module').then( m => m.OrganizationMainPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'admin-projects',
    loadChildren: () => import('./admin-projects/admin-projects.module').then( m => m.AdminProjectsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-daily-task',
    loadChildren: () => import('./create-daily-task/create-daily-task.module').then( m => m.CreateDailyTaskPageModule)
  },
  {
    path: 'delete-daily-task',
    loadChildren: () => import('./delete-daily-task/delete-daily-task.module').then( m => m.DeleteDailyTaskPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
