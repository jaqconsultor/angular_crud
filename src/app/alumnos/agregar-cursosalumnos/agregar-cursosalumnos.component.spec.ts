import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCursosalumnosComponent } from './agregar-cursosalumnos.component';

describe('AgregarCursosalumnosComponent', () => {
  let component: AgregarCursosalumnosComponent;
  let fixture: ComponentFixture<AgregarCursosalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursosalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursosalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
