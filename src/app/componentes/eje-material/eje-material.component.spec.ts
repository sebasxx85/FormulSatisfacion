import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeMaterialComponent } from './eje-material.component';

describe('EjeMaterialComponent', () => {
  let component: EjeMaterialComponent;
  let fixture: ComponentFixture<EjeMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjeMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
