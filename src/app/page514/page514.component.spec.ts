import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page514Component } from './page514.component';

describe('Page514Component', () => {
  let component: Page514Component;
  let fixture: ComponentFixture<Page514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
