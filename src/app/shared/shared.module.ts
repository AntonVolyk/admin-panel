import {NgModule} from '@angular/core';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [LoginService]
})
export class SharedModule {

}
