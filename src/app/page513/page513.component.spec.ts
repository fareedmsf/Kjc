import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page513Component } from './page513.component';

describe('Page513Component', () => {
  let component: Page513Component;
  let fixture: ComponentFixture<Page513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
