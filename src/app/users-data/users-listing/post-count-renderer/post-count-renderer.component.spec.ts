import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCountRendererComponent } from './post-count-renderer.component';

describe('PostCountRendererComponent', () => {
  let component: PostCountRendererComponent;
  let fixture: ComponentFixture<PostCountRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCountRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCountRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
