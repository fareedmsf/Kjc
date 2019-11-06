import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page313Component } from './page313.component';

describe('Page313Component', () => {
  let component: Page313Component;
  let fixture: ComponentFixture<Page313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
