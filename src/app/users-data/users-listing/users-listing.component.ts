import {Component} from '@angular/core';
import {UsersDataService} from '../services/users-data.service';
import {User} from '@shared/models/user';
import {AbstractDataListing} from '../models/abstract-data-listing';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent extends AbstractDataListing {
  showModalByClickFieldName = 'username';

  constructor(protected usersDataService: UsersDataService) {
    super(usersDataService);
  }

  onGreadReady(params) {
    this.params = params;
    this.params.api.sizeColumnsToFit();
    this.usersDataService.getUsers().then(async users => {
      users = await this.getUsersWithPostsData(users);
      this.params.api.setRowData(users);
    });
  }

  initColumnDefs(): any[] {
    return [
      {headerName: 'ID', field: 'id', width: 40, sortable: false},
      {headerName: 'Name', field: 'name'},
      {headerName: 'Username', field: 'username'},
      {headerName: 'Email', field: 'email'},
      {headerName: 'Posts count', field: 'postCount', width: 70, sortable: false}
    ];
  }

  private async getUsersWithPostsData(users: User[]): Promise<User[]> {
    const posts = await this.usersDataService.getPosts();
    return users.map(user => {
      user.postCount = posts.filter(post => post.userId === user.id).length;
      return user;
    });
  }
}
