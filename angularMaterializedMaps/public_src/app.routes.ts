import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { LoginComponent } from './components/login/index';
import { HomeComponent } from './shared/home.component';
import { NotFoundComponent } from './shared/not-found.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [

 //{ path: 'L', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: LoginComponent },
  //{ path: 'not-found', component: NotFoundComponent },
  //{ path: '**', redirectTo: 'login' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);