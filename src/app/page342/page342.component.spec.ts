import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page342Component } from './page342.component';

describe('Page342Component', () => {
  let component: Page342Component;
  let fixture: ComponentFixture<Page342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
