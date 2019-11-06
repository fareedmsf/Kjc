import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page362Component } from './page362.component';

describe('Page362Component', () => {
  let component: Page362Component;
  let fixture: ComponentFixture<Page362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
