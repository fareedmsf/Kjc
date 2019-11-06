import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page324Component } from './page324.component';

describe('Page324Component', () => {
  let component: Page324Component;
  let fixture: ComponentFixture<Page324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
