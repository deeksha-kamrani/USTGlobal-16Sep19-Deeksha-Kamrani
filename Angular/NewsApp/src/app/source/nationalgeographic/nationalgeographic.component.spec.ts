import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalgeographicComponent } from './nationalgeographic.component';

describe('NationalgeographicComponent', () => {
  let component: NationalgeographicComponent;
  let fixture: ComponentFixture<NationalgeographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalgeographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalgeographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
