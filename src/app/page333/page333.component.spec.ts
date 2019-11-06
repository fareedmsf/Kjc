import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page333Component } from './page333.component';

describe('Page333Component', () => {
  let component: Page333Component;
  let fixture: ComponentFixture<Page333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
