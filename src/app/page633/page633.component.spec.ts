import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page633Component } from './page633.component';

describe('Page633Component', () => {
  let component: Page633Component;
  let fixture: ComponentFixture<Page633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
