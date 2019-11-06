import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page251Component } from './page251.component';

describe('Page251Component', () => {
  let component: Page251Component;
  let fixture: ComponentFixture<Page251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
