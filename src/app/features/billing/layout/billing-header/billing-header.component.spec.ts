import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHeaderComponent } from './billing-header.component';

describe('BillingHeaderComponent', () => {
  let component: BillingHeaderComponent;
  let fixture: ComponentFixture<BillingHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingHeaderComponent]
    });
    fixture = TestBed.createComponent(BillingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
