import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page542Component } from './page542.component';

describe('Page542Component', () => {
  let component: Page542Component;
  let fixture: ComponentFixture<Page542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
