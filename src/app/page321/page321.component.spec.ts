import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page321Component } from './page321.component';

describe('Page321Component', () => {
  let component: Page321Component;
  let fixture: ComponentFixture<Page321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
