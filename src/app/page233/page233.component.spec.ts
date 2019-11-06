import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page233Component } from './page233.component';

describe('Page233Component', () => {
  let component: Page233Component;
  let fixture: ComponentFixture<Page233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
