import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActividadalumnosComponent } from './listar-actividadalumnos.component';

describe('ListarActividadalumnosComponent', () => {
  let component: ListarActividadalumnosComponent;
  let fixture: ComponentFixture<ListarActividadalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarActividadalumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarActividadalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
