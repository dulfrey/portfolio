import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product.DetailsComponent } from './product.details.component';

describe('Product.DetailsComponent', () => {
  let component: Product.DetailsComponent;
  let fixture: ComponentFixture<Product.DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product.DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product.DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
