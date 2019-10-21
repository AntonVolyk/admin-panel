import {BehaviorSubject, Subscription} from 'rxjs';
import {UsersDataService} from '../services/users-data.service';
import {OnInit} from '@angular/core';

export abstract class AbstractDataListing implements OnInit {
  params: any;
  columnDefs: any;
  subscription = new Subscription();
  defaultColDef = {
    sortable: true,
    resizable: true
  };
  data$ = new BehaviorSubject(null);

  protected constructor(protected usersDataService: UsersDataService) {
  }

  ngOnInit() {
    this.columnDefs = this.initColumnDefs();
    this.subscription.add(this.setQuickFilterValue());
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

  private setQuickFilterValue() {
    this.usersDataService.quickFilterValue.subscribe(value => {
      if (this.params) {
        this.params.api.setQuickFilter(value);
      }
    });
  }
}
