import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesmentComponent } from './invesment.component';

describe('InvesmentComponent', () => {
  let component: InvesmentComponent;
  let fixture: ComponentFixture<InvesmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvesmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
