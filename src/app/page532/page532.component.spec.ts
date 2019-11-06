import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page532Component } from './page532.component';

describe('Page532Component', () => {
  let component: Page532Component;
  let fixture: ComponentFixture<Page532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
