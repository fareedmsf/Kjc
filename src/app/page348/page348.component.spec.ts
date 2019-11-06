import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page348Component } from './page348.component';

describe('Page348Component', () => {
  let component: Page348Component;
  let fixture: ComponentFixture<Page348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
