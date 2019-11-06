import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7111Component } from './page7111.component';

describe('Page7111Component', () => {
  let component: Page7111Component;
  let fixture: ComponentFixture<Page7111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
