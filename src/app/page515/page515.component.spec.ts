import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page515Component } from './page515.component';

describe('Page515Component', () => {
  let component: Page515Component;
  let fixture: ComponentFixture<Page515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
