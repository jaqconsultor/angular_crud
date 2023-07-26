import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCursosalumnosComponent } from './editar-cursosalumnos.component';

describe('EditarCursosalumnosComponent', () => {
  let component: EditarCursosalumnosComponent;
  let fixture: ComponentFixture<EditarCursosalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCursosalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCursosalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
