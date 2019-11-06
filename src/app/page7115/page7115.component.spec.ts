import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7115Component } from './page7115.component';

describe('Page7115Component', () => {
  let component: Page7115Component;
  let fixture: ComponentFixture<Page7115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
