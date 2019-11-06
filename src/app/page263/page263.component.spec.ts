import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page263Component } from './page263.component';

describe('Page263Component', () => {
  let component: Page263Component;
  let fixture: ComponentFixture<Page263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
