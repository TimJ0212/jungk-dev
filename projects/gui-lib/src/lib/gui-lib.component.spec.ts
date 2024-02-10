import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiLibComponent } from './gui-lib.component';

describe('GuiLibComponent', () => {
  let component: GuiLibComponent;
  let fixture: ComponentFixture<GuiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
