import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page714Component } from './page714.component';

describe('Page714Component', () => {
  let component: Page714Component;
  let fixture: ComponentFixture<Page714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
