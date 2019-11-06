import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page332Component } from './page332.component';

describe('Page332Component', () => {
  let component: Page332Component;
  let fixture: ComponentFixture<Page332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
