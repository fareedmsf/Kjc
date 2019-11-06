import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page347Component } from './page347.component';

describe('Page347Component', () => {
  let component: Page347Component;
  let fixture: ComponentFixture<Page347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
