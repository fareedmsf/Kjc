import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page312Component } from './page312.component';

describe('Page312Component', () => {
  let component: Page312Component;
  let fixture: ComponentFixture<Page312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
