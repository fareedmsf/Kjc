import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page432Component } from './page432.component';

describe('Page432Component', () => {
  let component: Page432Component;
  let fixture: ComponentFixture<Page432Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page432Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page432Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
