import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page222Component } from './page222.component';

describe('Page222Component', () => {
  let component: Page222Component;
  let fixture: ComponentFixture<Page222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
