import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperityWorkComponent } from './properity-work.component';

describe('ProperityWorkComponent', () => {
  let component: ProperityWorkComponent;
  let fixture: ComponentFixture<ProperityWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProperityWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProperityWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
