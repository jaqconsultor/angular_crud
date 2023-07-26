import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipoaComponent } from './agregar-tipoa.component';

describe('AgregarTipoaComponent', () => {
  let component: AgregarTipoaComponent;
  let fixture: ComponentFixture<AgregarTipoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTipoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTipoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
