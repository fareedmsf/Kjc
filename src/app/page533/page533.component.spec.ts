import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page533Component } from './page533.component';

describe('Page533Component', () => {
  let component: Page533Component;
  let fixture: ComponentFixture<Page533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
