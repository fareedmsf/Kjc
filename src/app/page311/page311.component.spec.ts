import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page311Component } from './page311.component';

describe('Page311Component', () => {
  let component: Page311Component;
  let fixture: ComponentFixture<Page311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
