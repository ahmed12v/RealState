import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LauchComponent } from './lauch.component';

describe('LauchComponent', () => {
  let component: LauchComponent;
  let fixture: ComponentFixture<LauchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LauchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LauchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
