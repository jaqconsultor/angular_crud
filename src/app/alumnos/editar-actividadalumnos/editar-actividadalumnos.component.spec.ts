import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarActividadalumnosComponent } from './editar-actividadalumnos.component';

describe('EditarActividadalumnosComponent', () => {
  let component: EditarActividadalumnosComponent;
  let fixture: ComponentFixture<EditarActividadalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarActividadalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarActividadalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
