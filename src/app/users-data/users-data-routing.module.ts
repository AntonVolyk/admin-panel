import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersDataListingComponent} from './users-data-listing/users-data-listing.component';
import {UsersListingComponent} from './users-listing/users-listing.component';
import {PostsListingComponent} from './posts-listing/posts-listing.component';

const usersDataRoutes: Routes = [
  {
    path: '',
    component: UsersDataListingComponent,
    children: [
      { path: 'users', component: UsersListingComponent,  data: { selectedTab: 'users'}},
      { path: 'posts', component: PostsListingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersDataRoutes)],
  exports: [RouterModule]
})
export class UsersDataRoutingModule {
}
