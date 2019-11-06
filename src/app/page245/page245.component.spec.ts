import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page245Component } from './page245.component';

describe('Page245Component', () => {
  let component: Page245Component;
  let fixture: ComponentFixture<Page245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
