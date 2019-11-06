import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page244Component } from './page244.component';

describe('Page244Component', () => {
  let component: Page244Component;
  let fixture: ComponentFixture<Page244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
