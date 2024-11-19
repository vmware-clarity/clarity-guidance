import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationCardComponent } from './violation-card.component';

describe('ViolationCardComponent', () => {
  let component: ViolationCardComponent;
  let fixture: ComponentFixture<ViolationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViolationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViolationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
