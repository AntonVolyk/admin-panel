import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginRoutingModule} from './login-routing.module';
import {LoginScreenComponent} from './login-screen/login-screen.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FakeLoginInterceptor} from './services/fakeLoginInterceptor';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [
    LoginScreenComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeLoginInterceptor,
      multi: true
    }
  ]
})
export class LoginModule {
}
