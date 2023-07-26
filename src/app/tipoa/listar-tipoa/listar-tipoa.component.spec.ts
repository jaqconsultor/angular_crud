import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoaComponent } from './listar-tipoa.component';

describe('ListarTipoaComponent', () => {
  let component: ListarTipoaComponent;
  let fixture: ComponentFixture<ListarTipoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTipoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
