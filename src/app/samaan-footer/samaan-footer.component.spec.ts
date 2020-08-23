import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamaanFooterComponent } from './samaan-footer.component';

describe('SamaanFooterComponent', () => {
  let component: SamaanFooterComponent;
  let fixture: ComponentFixture<SamaanFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamaanFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamaanFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
