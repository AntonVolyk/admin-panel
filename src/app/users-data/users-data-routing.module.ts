import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersDataListingComponent} from './users-data-listing/users-data-listing.component';
import {UsersListingComponent} from './users-listing/users-listing.component';
import {PostsListingComponent} from './posts-listing/posts-listing.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {PostDetailComponent} from './post-detail/post-detail.component';

const usersDataRoutes: Routes = [
  {
    path: '',
    component: UsersDataListingComponent,
    children: [
      {
        path: 'users',
        component: UsersListingComponent,
        children: [
          {
            path: ':id',
            component: UserDetailComponent
          }
        ]
      },
      {
        path: 'posts',
        component: PostsListingComponent,
        children: [
          {
            path: ':id',
            component: PostDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(usersDataRoutes)],
  exports: [RouterModule]
})
export class UsersDataRoutingModule {
}
