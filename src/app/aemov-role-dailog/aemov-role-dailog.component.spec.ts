import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AemovRoleDailogComponent } from './aemov-role-dailog.component';

describe('AemovRoleDailogComponent', () => {
  let component: AemovRoleDailogComponent;
  let fixture: ComponentFixture<AemovRoleDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AemovRoleDailogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AemovRoleDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
