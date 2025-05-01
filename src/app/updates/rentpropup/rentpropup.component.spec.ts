import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentpropupComponent } from './rentpropup.component';

describe('RentpropupComponent', () => {
  let component: RentpropupComponent;
  let fixture: ComponentFixture<RentpropupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentpropupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentpropupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
