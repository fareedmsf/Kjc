import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page654Component } from './page654.component';

describe('Page654Component', () => {
  let component: Page654Component;
  let fixture: ComponentFixture<Page654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
