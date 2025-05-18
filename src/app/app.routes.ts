import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./components/welcome/welcome.component').then(m => m.WelcomeComponent)
      },
      {
        path: 'bejegyzesek',
        component: PostListComponent
      },
      {
        path: 'uj-bejegyzes',
        component: PostFormComponent
      },
      {
        path: 'kereses',
        loadComponent: () => import('./components/kereses/kereses.component').then(m => m.KeresesComponent),
},


    ]
  },

  { path: '**', redirectTo: 'login' }
];
