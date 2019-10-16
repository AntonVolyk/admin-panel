import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersDataRoutingModule} from './users-data-routing.module';
import { UsersDataListingComponent } from './users-data-listing/users-data-listing.component';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { PostsListingComponent } from './posts-listing/posts-listing.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [UsersDataListingComponent, UsersListingComponent, PostsListingComponent, UserDetailComponent, PostDetailComponent],
  imports: [
    UsersDataRoutingModule,
    CommonModule
  ]
})
export class UsersDataModule { }
