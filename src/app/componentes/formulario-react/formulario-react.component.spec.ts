import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactComponent } from './formulario-react.component';

describe('FormularioReactComponent', () => {
  let component: FormularioReactComponent;
  let fixture: ComponentFixture<FormularioReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
