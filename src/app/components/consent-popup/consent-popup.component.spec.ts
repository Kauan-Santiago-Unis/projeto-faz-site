import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentPopupComponent } from './consent-popup.component';

describe('ConsentPopupComponent', () => {
  let component: ConsentPopupComponent;
  let fixture: ComponentFixture<ConsentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsentPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
