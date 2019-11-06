import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page255Component } from './page255.component';

describe('Page255Component', () => {
  let component: Page255Component;
  let fixture: ComponentFixture<Page255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
