import {Component, OnInit} from '@angular/core';
import {UsersDataService} from '../services/users-data.service';
import {User} from '@shared/models/user';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {
  users: User[];
  params: any;
  columnDefs: any;
  subscription = new Subscription();
  defaultColDef = {
    sortable: true,
    resizable: true
  };
  data$ = new BehaviorSubject(null);

  constructor(private usersDataService: UsersDataService) {}

  ngOnInit() {
    this.columnDefs = this.initColumnDefs();
    this.subscription.add(this.setQuickFilterValue());
  }

  onGreadReady(params) {
    this.params = params;
    this.params.api.sizeColumnsToFit();
    this.usersDataService.getUsers().then(async users => {
      this.users = users;
      this.users = await this.getUsersWithPostsData(users);
      this.params.api.setRowData(users);
    });
  }

  onGridSizeChanged(params) {
    params.api.sizeColumnsToFit();
  }

  onCellClicked(params) {
    this.data$.next({...params.data});
  }

  private initColumnDefs(): any[] {
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

  private setQuickFilterValue() {
    this.usersDataService.quickFilterValue.subscribe(value => {
      if (this.params) {
        this.params.api.setQuickFilter(value);
      }
    });
  }
}
