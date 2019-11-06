import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page334Component } from './page334.component';

describe('Page334Component', () => {
  let component: Page334Component;
  let fixture: ComponentFixture<Page334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
