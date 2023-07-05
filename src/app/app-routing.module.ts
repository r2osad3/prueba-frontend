import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardUserComponent } from './pages/dashboard/dashboard-user/dashboard-user.component';
import { DashboardNewComponent } from './pages/dashboard/dashboard-new/dashboard-new.component';
import { DashboardInfoComponent } from './pages/dashboard/dashboard-info/dashboard-info.component';
import { DashboardUpdComponent } from './pages/dashboard/dashboard-upd/dashboard-upd.component';
const routes: Routes = [

  {
    path: '',
    component:HomeComponent,
    pathMatch:'full'

  },
  {
    path: 'signup',
    component:SignupComponent,
    pathMatch:'full'

  },
  {

    path: 'login',
    component:LoginComponent,
    pathMatch:'full'
  }, {
    path: 'lista',
    component:DashboardUserComponent,
    pathMatch:'full'

  },
  {

    path: 'nuevo',
    component:DashboardNewComponent,
    pathMatch:'full'
  },
  {
    path: 'info/:id',
    component: DashboardInfoComponent,
    pathMatch:'full'
  },
  {
    path: 'upd/:id',
    component: DashboardUpdComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
