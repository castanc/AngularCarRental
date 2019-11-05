import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalItemComponent } from './car-rental-item.component';

describe('CarRentalItemComponent', () => {
  let component: CarRentalItemComponent;
  let fixture: ComponentFixture<CarRentalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRentalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
