import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page511Component } from './page511.component';

describe('Page511Component', () => {
  let component: Page511Component;
  let fixture: ComponentFixture<Page511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
