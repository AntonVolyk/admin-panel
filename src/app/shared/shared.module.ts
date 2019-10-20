import {NgModule} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  declarations: [DetailsModalComponent],
  exports: [DetailsModalComponent]
})
export class SharedModule {

}
