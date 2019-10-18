import {Component, OnInit} from '@angular/core';
import {UsersDataService} from '../services/users-data.service';
import {User} from '@shared/models/user';
import {PostCountRendererComponent} from './post-count-renderer/post-count-renderer.component';
import {Subscription} from 'rxjs';

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

  constructor(private usersDataService: UsersDataService) {
  }

  ngOnInit() {
    this.usersDataService.getUsers().then(users => {
      this.users = users;
      this.params.api.setRowData(users);
    });
    this.columnDefs = this.initColumnDefs();
    this.subscription.add(this.setQuickFilterValue());
  }

  onGreadReady(params) {
    this.params = params;
    this.params.api.sizeColumnsToFit();
  }

  private initColumnDefs(): any[] {
    return [
      {headerName: 'ID', field: 'id', width: 40, sortable: false},
      {headerName: 'Name', field: 'name'},
      {headerName: 'Username', field: 'username'},
      {headerName: 'Email', field: 'email'},
      {
        colId: 'postCount',
        headerName: 'Posts count',
        cellRendererFramework: PostCountRendererComponent,
        width: 50,
        sortable: false
      }
    ];
  }

  private setQuickFilterValue() {
    this.usersDataService.quickFilterValue.subscribe(value => {
      if (this.params) {
        this.params.api.setQuickFilter(value);
      }
    });
  }
}
