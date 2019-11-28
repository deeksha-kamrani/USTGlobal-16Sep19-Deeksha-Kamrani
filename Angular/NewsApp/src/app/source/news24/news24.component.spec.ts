import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News24Component } from './news24.component';

describe('News24Component', () => {
  let component: News24Component;
  let fixture: ComponentFixture<News24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
