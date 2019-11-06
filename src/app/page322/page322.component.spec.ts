import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page322Component } from './page322.component';

describe('Page322Component', () => {
  let component: Page322Component;
  let fixture: ComponentFixture<Page322Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
