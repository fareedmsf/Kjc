import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page323Component } from './page323.component';

describe('Page323Component', () => {
  let component: Page323Component;
  let fixture: ComponentFixture<Page323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
