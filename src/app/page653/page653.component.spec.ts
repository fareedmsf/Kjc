import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page653Component } from './page653.component';

describe('Page653Component', () => {
  let component: Page653Component;
  let fixture: ComponentFixture<Page653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
