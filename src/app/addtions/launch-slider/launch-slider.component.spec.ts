import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchSliderComponent } from './launch-slider.component';

describe('LaunchSliderComponent', () => {
  let component: LaunchSliderComponent;
  let fixture: ComponentFixture<LaunchSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
