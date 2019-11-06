import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page414Component } from './page414.component';

describe('Page414Component', () => {
  let component: Page414Component;
  let fixture: ComponentFixture<Page414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
