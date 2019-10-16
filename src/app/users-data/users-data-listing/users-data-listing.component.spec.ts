import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDataListingComponent } from './users-data-listing.component';

describe('UsersDataListingComponent', () => {
  let component: UsersDataListingComponent;
  let fixture: ComponentFixture<UsersDataListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDataListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDataListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
