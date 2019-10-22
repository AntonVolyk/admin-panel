import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '@shared/services/authentication.service';
import {UsersDataService, NavigationTab} from '../services/users-data.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-users-data-listing',
  templateUrl: './users-data-listing.component.html',
  styleUrls: ['./users-data-listing.component.scss']
})
export class UsersDataListingComponent implements OnInit {
  selectedTab: NavigationTab;
  subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersDataService: UsersDataService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    const url = this.router.routerState.snapshot.url;
    if (url.endsWith('users-data')) {
      this.onUsersNavigation();
    }
    this.subscription.add(this.getSelectedTabSubsciption());
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
    this.router.navigate(['./users'], {relativeTo: this.route});
  }

  onPostsNavigation() {
    this.router.navigate(['./posts'], {relativeTo: this.route});
  }

  onSignOut() {
   this.authenticationService.logout();
  }

  private getSelectedTabSubsciption(): Subscription {
    return this.usersDataService.selectedTab$.subscribe(tab => this.selectedTab = tab);
  }
}
