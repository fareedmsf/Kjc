import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page711Component } from './page711.component';

describe('Page711Component', () => {
  let component: Page711Component;
  let fixture: ComponentFixture<Page711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
