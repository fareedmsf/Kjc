import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page345Component } from './page345.component';

describe('Page345Component', () => {
  let component: Page345Component;
  let fixture: ComponentFixture<Page345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
