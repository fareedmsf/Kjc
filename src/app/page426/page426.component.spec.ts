import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page426Component } from './page426.component';

describe('Page426Component', () => {
  let component: Page426Component;
  let fixture: ComponentFixture<Page426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
