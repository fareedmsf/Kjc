import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page343Component } from './page343.component';

describe('Page343Component', () => {
  let component: Page343Component;
  let fixture: ComponentFixture<Page343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
