import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page521Component } from './page521.component';

describe('Page521Component', () => {
  let component: Page521Component;
  let fixture: ComponentFixture<Page521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
