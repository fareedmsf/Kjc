import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page242Component } from './page242.component';

describe('Page242Component', () => {
  let component: Page242Component;
  let fixture: ComponentFixture<Page242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
