import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchesComponent } from './lanches.component';

describe('LanchesComponent', () => {
  let component: LanchesComponent;
  let fixture: ComponentFixture<LanchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
