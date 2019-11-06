import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7112Component } from './page7112.component';

describe('Page7112Component', () => {
  let component: Page7112Component;
  let fixture: ComponentFixture<Page7112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
