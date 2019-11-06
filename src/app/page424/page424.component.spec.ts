import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page424Component } from './page424.component';

describe('Page424Component', () => {
  let component: Page424Component;
  let fixture: ComponentFixture<Page424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
