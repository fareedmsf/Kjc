import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page232Component } from './page232.component';

describe('Page232Component', () => {
  let component: Page232Component;
  let fixture: ComponentFixture<Page232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
