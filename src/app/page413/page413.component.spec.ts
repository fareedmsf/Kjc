import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page413Component } from './page413.component';

describe('Page413Component', () => {
  let component: Page413Component;
  let fixture: ComponentFixture<Page413Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page413Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
