import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '/login', component: LoginComponent},
  {path: '/create-registration', component: CreateRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
