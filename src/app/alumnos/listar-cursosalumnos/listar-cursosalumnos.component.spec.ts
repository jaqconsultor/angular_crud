import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCursosalumnosComponent } from './listar-cursosalumnos.component';

describe('ListarCursosalumnosComponent', () => {
  let component: ListarCursosalumnosComponent;
  let fixture: ComponentFixture<ListarCursosalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCursosalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCursosalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
