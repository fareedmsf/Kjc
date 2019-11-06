import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7117Component } from './page7117.component';

describe('Page7117Component', () => {
  let component: Page7117Component;
  let fixture: ComponentFixture<Page7117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
