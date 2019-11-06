import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page314Component } from './page314.component';

describe('Page314Component', () => {
  let component: Page314Component;
  let fixture: ComponentFixture<Page314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
