import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintReviewComponent } from './sprint-review.component';

describe('SprintReviewComponent', () => {
  let component: SprintReviewComponent;
  let fixture: ComponentFixture<SprintReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprintReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
