import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page623Component } from './page623.component';

describe('Page623Component', () => {
  let component: Page623Component;
  let fixture: ComponentFixture<Page623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
