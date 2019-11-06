import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page632Component } from './page632.component';

describe('Page632Component', () => {
  let component: Page632Component;
  let fixture: ComponentFixture<Page632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
