import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginScreenComponent} from './login-screen/login-screen.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
