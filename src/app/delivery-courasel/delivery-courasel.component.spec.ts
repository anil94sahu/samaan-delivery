import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryCouraselComponent } from './delivery-courasel.component';

describe('DeliveryCouraselComponent', () => {
  let component: DeliveryCouraselComponent;
  let fixture: ComponentFixture<DeliveryCouraselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryCouraselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryCouraselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
