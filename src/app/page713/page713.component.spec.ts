import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page713Component } from './page713.component';

describe('Page713Component', () => {
  let component: Page713Component;
  let fixture: ComponentFixture<Page713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
