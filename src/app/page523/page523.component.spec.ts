import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page523Component } from './page523.component';

describe('Page523Component', () => {
  let component: Page523Component;
  let fixture: ComponentFixture<Page523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
