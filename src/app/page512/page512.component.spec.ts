import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page512Component } from './page512.component';

describe('Page512Component', () => {
  let component: Page512Component;
  let fixture: ComponentFixture<Page512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
