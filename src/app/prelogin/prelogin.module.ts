import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { PreloginRoutingModule } from './prelogin-routing.module';
import { PreloginComponent } from './prelogin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PreloginComponent,
    AboutusComponent,
    ForgotpasswordComponent,
    RegisterComponent
  ],
  imports: [
    PreloginRoutingModule,
    SharedModule
  ]
})
export class PreloginModule { }
