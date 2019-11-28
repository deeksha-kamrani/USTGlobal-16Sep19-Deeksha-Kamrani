import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThehinduComponent } from './thehindu.component';

describe('ThehinduComponent', () => {
  let component: ThehinduComponent;
  let fixture: ComponentFixture<ThehinduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThehinduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThehinduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
