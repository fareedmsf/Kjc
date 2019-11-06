import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page634Component } from './page634.component';

describe('Page634Component', () => {
  let component: Page634Component;
  let fixture: ComponentFixture<Page634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
