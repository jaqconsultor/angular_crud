import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarGrupoalumnosComponent } from './listar-grupoalumnos.component';

describe('ListarGrupoalumnosComponent', () => {
  let component: ListarGrupoalumnosComponent;
  let fixture: ComponentFixture<ListarGrupoalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarGrupoalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarGrupoalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
