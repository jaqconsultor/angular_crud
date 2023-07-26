import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormatoaComponent } from './editar-formatoa.component';

describe('EditarFormatoaComponent', () => {
  let component: EditarFormatoaComponent;
  let fixture: ComponentFixture<EditarFormatoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFormatoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFormatoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
