import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page211Component } from './page211.component';

describe('Page211Component', () => {
  let component: Page211Component;
  let fixture: ComponentFixture<Page211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
