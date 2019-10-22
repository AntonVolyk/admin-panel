import {Component} from '@angular/core';
import {Post} from '@shared/models/post';
import {AbstractDataListing} from '../models/abstract-data-listing';
import {UsersDataService, NavigationTab} from '../services/users-data.service';

const TAB_NAME = NavigationTab.Posts;

@Component({
  selector: 'app-posts-listing',
  templateUrl: './posts-listing.component.html',
  styleUrls: ['./posts-listing.component.scss']
})
export class PostsListingComponent extends AbstractDataListing {
  showModalByClickFieldName = 'title';

  constructor(protected usersDataService: UsersDataService) {
    super(usersDataService, TAB_NAME);
  }

  onGreadReady(params) {
    this.params = params;
    this.params.api.sizeColumnsToFit();
    this.usersDataService.getPosts().then(async posts => {
      posts = await this.getPostsWithUserData(posts);
      this.params.api.setRowData(posts);
    });
  }

  initColumnDefs(): any[] {
    return [
      {headerName: 'ID', field: 'id', width: 40, sortable: false},
      {headerName: 'Title', field: 'title'},
      {headerName: 'User', field: 'username'}
    ];
  }

  private async getPostsWithUserData(posts: Post[]): Promise<Post[]> {
    const users = await this.usersDataService.getUsers();
    return posts.map(post => {
      const postUser = users.find(user => post.userId === user.id);
      if (postUser) {
        post.username = postUser.name;
      }
      return post;
    });
  }
}
