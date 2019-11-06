import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page363Component } from './page363.component';

describe('Page363Component', () => {
  let component: Page363Component;
  let fixture: ComponentFixture<Page363Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page363Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
