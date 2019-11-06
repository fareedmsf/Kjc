import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page543Component } from './page543.component';

describe('Page543Component', () => {
  let component: Page543Component;
  let fixture: ComponentFixture<Page543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
