import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page243Component } from './page243.component';

describe('Page243Component', () => {
  let component: Page243Component;
  let fixture: ComponentFixture<Page243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
