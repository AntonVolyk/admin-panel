import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersDataRoutingModule} from './users-data-routing.module';
import {UsersDataListingComponent} from './users-data-listing/users-data-listing.component';
import {UsersListingComponent} from './users-listing/users-listing.component';
import {PostsListingComponent} from './posts-listing/posts-listing.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {AgGridModule} from 'ag-grid-angular';
import {UsersDataService} from './services/users-data.service';
import { PostCountRendererComponent } from './users-listing/post-count-renderer/post-count-renderer.component';

@NgModule({
  declarations: [
    UsersDataListingComponent,
    UsersListingComponent,
    PostsListingComponent,
    UserDetailComponent,
    PostDetailComponent,
    PostCountRendererComponent
  ],
  imports: [
    CommonModule,
    UsersDataRoutingModule,
    AgGridModule.withComponents([PostCountRendererComponent])
  ],
  providers: [UsersDataService]
})
export class UsersDataModule {
}
