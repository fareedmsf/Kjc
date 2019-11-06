import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7114Component } from './page7114.component';

describe('Page7114Component', () => {
  let component: Page7114Component;
  let fixture: ComponentFixture<Page7114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
