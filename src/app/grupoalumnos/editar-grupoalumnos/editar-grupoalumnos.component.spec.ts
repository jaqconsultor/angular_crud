import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGrupoalumnosComponent } from './editar-grupoalumnos.component';

describe('EditarGrupoalumnosComponent', () => {
  let component: EditarGrupoalumnosComponent;
  let fixture: ComponentFixture<EditarGrupoalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarGrupoalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarGrupoalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
