import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page531Component } from './page531.component';

describe('Page531Component', () => {
  let component: Page531Component;
  let fixture: ComponentFixture<Page531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
