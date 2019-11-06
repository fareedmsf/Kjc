import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page372Component } from './page372.component';

describe('Page372Component', () => {
  let component: Page372Component;
  let fixture: ComponentFixture<Page372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
