import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamaanListComponent } from './samaan-list.component';

describe('SamaanListComponent', () => {
  let component: SamaanListComponent;
  let fixture: ComponentFixture<SamaanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamaanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamaanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
