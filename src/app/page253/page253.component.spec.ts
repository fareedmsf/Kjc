import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page253Component } from './page253.component';

describe('Page253Component', () => {
  let component: Page253Component;
  let fixture: ComponentFixture<Page253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
