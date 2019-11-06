import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page252Component } from './page252.component';

describe('Page252Component', () => {
  let component: Page252Component;
  let fixture: ComponentFixture<Page252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
