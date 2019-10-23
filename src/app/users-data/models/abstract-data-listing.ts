import {BehaviorSubject, Subscription} from 'rxjs';
import {UsersDataService, NavigationTab} from '../services/users-data.service';
import {OnDestroy, OnInit} from '@angular/core';

export abstract class AbstractDataListing implements OnInit, OnDestroy {
  params: any;
  columnDefs: any;
  subscription = new Subscription();
  defaultColDef = {
    sortable: true,
    resizable: true
  };
  data$ = new BehaviorSubject(null);

  protected constructor(protected usersDataService: UsersDataService, protected selectetTab: NavigationTab) {
  }

  ngOnInit() {
    this.usersDataService.selectedTab$.next(this.selectetTab);
    this.columnDefs = this.initColumnDefs();
    this.subscription.add(this.setQuickFilterValue());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  abstract onGreadReady(params): void;

  abstract initColumnDefs(): any[];

  onGridSizeChanged(params) {
    params.api.sizeColumnsToFit();
  }

  onCellClicked(params: any, clickableFieldName: string) {
    if (params.colDef.field === clickableFieldName) {
      this.data$.next({...params.data});
    }
  }

  private setQuickFilterValue(): Subscription {
    return this.usersDataService.quickFilterValue$.subscribe(value => {
      if (this.params) {
        this.params.api.setQuickFilter(value);
      }
    });
  }
}
