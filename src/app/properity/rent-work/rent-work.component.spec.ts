import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentWorkComponent } from './rent-work.component';

describe('RentWorkComponent', () => {
  let component: RentWorkComponent;
  let fixture: ComponentFixture<RentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
