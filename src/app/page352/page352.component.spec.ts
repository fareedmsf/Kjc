import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page352Component } from './page352.component';

describe('Page352Component', () => {
  let component: Page352Component;
  let fixture: ComponentFixture<Page352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
