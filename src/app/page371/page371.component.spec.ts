import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page371Component } from './page371.component';

describe('Page371Component', () => {
  let component: Page371Component;
  let fixture: ComponentFixture<Page371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
