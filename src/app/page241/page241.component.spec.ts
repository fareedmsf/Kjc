import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page241Component } from './page241.component';

describe('Page241Component', () => {
  let component: Page241Component;
  let fixture: ComponentFixture<Page241Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page241Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
