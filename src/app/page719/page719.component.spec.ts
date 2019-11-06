import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page719Component } from './page719.component';

describe('Page719Component', () => {
  let component: Page719Component;
  let fixture: ComponentFixture<Page719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
