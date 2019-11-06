import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page346Component } from './page346.component';

describe('Page346Component', () => {
  let component: Page346Component;
  let fixture: ComponentFixture<Page346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
