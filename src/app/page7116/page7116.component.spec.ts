import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7116Component } from './page7116.component';

describe('Page7116Component', () => {
  let component: Page7116Component;
  let fixture: ComponentFixture<Page7116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
