import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page425Component } from './page425.component';

describe('Page425Component', () => {
  let component: Page425Component;
  let fixture: ComponentFixture<Page425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
