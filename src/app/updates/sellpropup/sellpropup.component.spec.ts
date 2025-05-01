import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellpropupComponent } from './sellpropup.component';

describe('SellpropupComponent', () => {
  let component: SellpropupComponent;
  let fixture: ComponentFixture<SellpropupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellpropupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellpropupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
