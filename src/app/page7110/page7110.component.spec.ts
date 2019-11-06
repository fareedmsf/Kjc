import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page7110Component } from './page7110.component';

describe('Page7110Component', () => {
  let component: Page7110Component;
  let fixture: ComponentFixture<Page7110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page7110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page7110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
