import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasComponent } from './saas.component';

describe('SaasComponent', () => {
  let component: SaasComponent;
  let fixture: ComponentFixture<SaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
