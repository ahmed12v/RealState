import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellWorkComponent } from './sell-work.component';

describe('SellWorkComponent', () => {
  let component: SellWorkComponent;
  let fixture: ComponentFixture<SellWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
