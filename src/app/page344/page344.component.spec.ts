import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page344Component } from './page344.component';

describe('Page344Component', () => {
  let component: Page344Component;
  let fixture: ComponentFixture<Page344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
