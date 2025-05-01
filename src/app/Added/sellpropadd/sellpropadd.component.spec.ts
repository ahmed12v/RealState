import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellpropaddComponent } from './sellpropadd.component';

describe('SellpropaddComponent', () => {
  let component: SellpropaddComponent;
  let fixture: ComponentFixture<SellpropaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellpropaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellpropaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
