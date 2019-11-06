import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page522Component } from './page522.component';

describe('Page522Component', () => {
  let component: Page522Component;
  let fixture: ComponentFixture<Page522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
