import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateLoanProductComponent } from './crate-loan-product.component';

describe('CrateLoanProductComponent', () => {
  let component: CrateLoanProductComponent;
  let fixture: ComponentFixture<CrateLoanProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrateLoanProductComponent]
    });
    fixture = TestBed.createComponent(CrateLoanProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
