import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page223Component } from './page223.component';

describe('Page223Component', () => {
  let component: Page223Component;
  let fixture: ComponentFixture<Page223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
