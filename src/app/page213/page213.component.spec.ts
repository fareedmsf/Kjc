import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page213Component } from './page213.component';

describe('Page213Component', () => {
  let component: Page213Component;
  let fixture: ComponentFixture<Page213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
