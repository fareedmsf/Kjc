import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page718Component } from './page718.component';

describe('Page718Component', () => {
  let component: Page718Component;
  let fixture: ComponentFixture<Page718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
