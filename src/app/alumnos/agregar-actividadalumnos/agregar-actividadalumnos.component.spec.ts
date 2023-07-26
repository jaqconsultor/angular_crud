import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarActividadalumnosComponent } from './agregar-actividadalumnos.component';

describe('AgregarActividadalumnosComponent', () => {
  let component: AgregarActividadalumnosComponent;
  let fixture: ComponentFixture<AgregarActividadalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarActividadalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarActividadalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
