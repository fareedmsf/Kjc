import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page642Component } from './page642.component';

describe('Page642Component', () => {
  let component: Page642Component;
  let fixture: ComponentFixture<Page642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
