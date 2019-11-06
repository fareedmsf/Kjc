import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page434Component } from './page434.component';

describe('Page434Component', () => {
  let component: Page434Component;
  let fixture: ComponentFixture<Page434Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page434Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
