import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentpropaddComponent } from './rentpropadd.component';

describe('RentpropaddComponent', () => {
  let component: RentpropaddComponent;
  let fixture: ComponentFixture<RentpropaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentpropaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentpropaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
