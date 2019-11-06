import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page423Component } from './page423.component';

describe('Page423Component', () => {
  let component: Page423Component;
  let fixture: ComponentFixture<Page423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
