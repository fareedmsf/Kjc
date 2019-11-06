import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page364Component } from './page364.component';

describe('Page364Component', () => {
  let component: Page364Component;
  let fixture: ComponentFixture<Page364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
