import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFormatoaComponent } from './agregar-formatoa.component';

describe('AgregarFormatoaComponent', () => {
  let component: AgregarFormatoaComponent;
  let fixture: ComponentFixture<AgregarFormatoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFormatoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarFormatoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
