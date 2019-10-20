import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersDataRoutingModule} from './users-data-routing.module';
import {UsersDataListingComponent} from './users-data-listing/users-data-listing.component';
import {UsersListingComponent} from './users-listing/users-listing.component';
import {PostsListingComponent} from './posts-listing/posts-listing.component';
import {AgGridModule} from 'ag-grid-angular';
import {UsersDataService} from './services/users-data.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    UsersDataListingComponent,
    UsersListingComponent,
    PostsListingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersDataRoutingModule,
    AgGridModule.withComponents()
  ],
  providers: [UsersDataService]
})
export class UsersDataModule {
}
