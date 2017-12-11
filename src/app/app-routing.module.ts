import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { LoginComponent } from './login/login.component'
import { LoadedRouterConfig } from '@angular/router/src/config';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
