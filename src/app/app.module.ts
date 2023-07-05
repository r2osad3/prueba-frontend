import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardUserComponent } from './pages/dashboard/dashboard-user/dashboard-user.component';
import { InterceptorService } from './service/interceptor/interceptor.service';
import { DashboardNewComponent } from './pages/dashboard/dashboard-new/dashboard-new.component';
import { DashboardInfoComponent } from './pages/dashboard/dashboard-info/dashboard-info.component';
import { DashboardUpdComponent } from './pages/dashboard/dashboard-upd/dashboard-upd.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    DashboardUserComponent,
    DashboardNewComponent,
    DashboardInfoComponent,
    DashboardUpdComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({}),
    FormsModule
  ],
  providers: [InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
