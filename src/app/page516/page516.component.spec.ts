import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page516Component } from './page516.component';

describe('Page516Component', () => {
  let component: Page516Component;
  let fixture: ComponentFixture<Page516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
