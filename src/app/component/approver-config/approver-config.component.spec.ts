import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverConfigComponent } from './approver-config.component';

describe('ApproverConfigComponent', () => {
  let component: ApproverConfigComponent;
  let fixture: ComponentFixture<ApproverConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproverConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproverConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
