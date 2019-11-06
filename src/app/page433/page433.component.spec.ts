import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page433Component } from './page433.component';

describe('Page433Component', () => {
  let component: Page433Component;
  let fixture: ComponentFixture<Page433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
