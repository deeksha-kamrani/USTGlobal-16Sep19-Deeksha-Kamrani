import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsatodayComponent } from './usatoday.component';

describe('UsatodayComponent', () => {
  let component: UsatodayComponent;
  let fixture: ComponentFixture<UsatodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsatodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsatodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
