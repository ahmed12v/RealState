import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelaunchComponent } from './updatelaunch.component';

describe('UpdatelaunchComponent', () => {
  let component: UpdatelaunchComponent;
  let fixture: ComponentFixture<UpdatelaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatelaunchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatelaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
