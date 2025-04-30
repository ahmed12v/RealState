import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncesWorkComponent } from './launces-work.component';

describe('LauncesWorkComponent', () => {
  let component: LauncesWorkComponent;
  let fixture: ComponentFixture<LauncesWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LauncesWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LauncesWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
