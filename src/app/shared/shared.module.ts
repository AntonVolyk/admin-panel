import {NgModule} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [AuthenticationService]
})
export class SharedModule {

}
