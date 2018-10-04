import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginCompComponent } from './component/login-comp/login-comp.component';
import { HeaderComponent } from './component/header/header.component';
import { RegisterComponent } from './component/register/register.component';
import { UserComponent } from './component/user/user.component';
import {LoginGuard} from './guards/login.guard';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {UserService} from './services/user.service';
import { HomeComponent } from './component/home/home.component';
import {ProductService} from './services/product.service';
import {GridService} from './services/grid.service';
import { CartComponent } from './component/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    HeaderComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'register',component:RegisterComponent},
      {path:'login',component:LoginCompComponent},
      {path:'user',component:UserComponent , canActivate:[LoginGuard]},
      {path:'cart',component:CartComponent},
     
    ])
  ],
  providers: [LoginService,UserService,ProductService,GridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
