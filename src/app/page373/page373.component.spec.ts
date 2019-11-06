import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page373Component } from './page373.component';

describe('Page373Component', () => {
  let component: Page373Component;
  let fixture: ComponentFixture<Page373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
