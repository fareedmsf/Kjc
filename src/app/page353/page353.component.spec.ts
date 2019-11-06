import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page353Component } from './page353.component';

describe('Page353Component', () => {
  let component: Page353Component;
  let fixture: ComponentFixture<Page353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
