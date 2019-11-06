import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page341Component } from './page341.component';

describe('Page341Component', () => {
  let component: Page341Component;
  let fixture: ComponentFixture<Page341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
