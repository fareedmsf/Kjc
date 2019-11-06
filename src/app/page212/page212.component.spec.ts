import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page212Component } from './page212.component';

describe('Page212Component', () => {
  let component: Page212Component;
  let fixture: ComponentFixture<Page212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
