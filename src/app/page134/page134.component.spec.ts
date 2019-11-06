import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page134Component } from './page134.component';

describe('Page134Component', () => {
  let component: Page134Component;
  let fixture: ComponentFixture<Page134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
