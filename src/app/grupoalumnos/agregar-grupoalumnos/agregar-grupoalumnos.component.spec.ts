import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGrupoalumnosComponent } from './agregar-grupoalumnos.component';

describe('AgregarGrupoalumnosComponent', () => {
  let component: AgregarGrupoalumnosComponent;
  let fixture: ComponentFixture<AgregarGrupoalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarGrupoalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarGrupoalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
