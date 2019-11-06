import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page441Component } from './page441.component';

describe('Page441Component', () => {
  let component: Page441Component;
  let fixture: ComponentFixture<Page441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
