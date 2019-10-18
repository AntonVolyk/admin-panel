import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '@shared/services/authentication.service';
import {UsersDataService} from '../services/users-data.service';

enum NavigationTab {Users, Posts}

@Component({
  selector: 'app-users-data-listing',
  templateUrl: './users-data-listing.component.html',
  styleUrls: ['./users-data-listing.component.scss']
})
export class UsersDataListingComponent implements OnInit {
  selectedTab = NavigationTab.Users;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersDataService: UsersDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    switch (this.selectedTab) {
      case NavigationTab.Posts:
        this.onPostsNavigation();
        break;
      case NavigationTab.Users:
      default:
        this.onUsersNavigation();
    }
  }

  get isUsersTabSelected(): boolean {
    return this.selectedTab === NavigationTab.Users;
  }

  get isPostsTabSelected(): boolean {
    return this.selectedTab === NavigationTab.Posts;
  }

  onQuickFilterChanged(event) {
    this.usersDataService.quickFilterValue.next(event.data);
  }

  onUsersNavigation() {
    this.selectedTab = NavigationTab.Users;
    this.router.navigate(['./users'], {relativeTo: this.route});
  }

  onPostsNavigation() {
    this.selectedTab = NavigationTab.Posts;
    this.router.navigate(['./posts'], {relativeTo: this.route});
  }

  onSignOut() {
   this.authenticationService.logout();
  }
}
