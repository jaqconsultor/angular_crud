import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoaComponent } from './editar-tipoa.component';

describe('EditarTipoaComponent', () => {
  let component: EditarTipoaComponent;
  let fixture: ComponentFixture<EditarTipoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
