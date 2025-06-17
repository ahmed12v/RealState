import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAoartComponent } from './rent-aoart.component';

describe('RentAoartComponent', () => {
  let component: RentAoartComponent;
  let fixture: ComponentFixture<RentAoartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentAoartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentAoartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
