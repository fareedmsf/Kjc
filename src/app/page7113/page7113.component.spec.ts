import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7113Component } from './page7113.component';

describe('Page7113Component', () => {
  let component: Page7113Component;
  let fixture: ComponentFixture<Page7113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
