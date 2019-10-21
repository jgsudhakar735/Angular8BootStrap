import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { PreloginComponent } from './prelogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';


const childRoutes: Routes = [
  { path: '', component: PreloginComponent, children: [
    { path: '', component: LoginComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent },
    { path: 'register', component: RegisterComponent }
  ]},
];
@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class PreloginRoutingModule { }
