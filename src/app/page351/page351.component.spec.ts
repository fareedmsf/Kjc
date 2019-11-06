import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page351Component } from './page351.component';

describe('Page351Component', () => {
  let component: Page351Component;
  let fixture: ComponentFixture<Page351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
