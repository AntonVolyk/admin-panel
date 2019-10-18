import {Component, OnInit} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {UsersDataService} from '../../services/users-data.service';

@Component({
  selector: 'app-post-count-renderer',
  templateUrl: './post-count-renderer.component.html',
  styleUrls: ['./post-count-renderer.component.scss']
})
export class PostCountRendererComponent implements ICellRendererAngularComp {
  params: any;

  constructor(private usersDataService: UsersDataService) {
  }

  agInit(params: any) {
    this.params = params;
    this.usersDataService.getUsersPostsById(params.data.id)
      .then(posts => {
        params.data.postCount = posts.filter(item => item.userId === params.data.id).length;
      });
  }

  refresh(): boolean {
    return true;
  }
}
