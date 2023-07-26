import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFormatoaComponent } from './listar-formatoa.component';

describe('ListarFormatoaComponent', () => {
  let component: ListarFormatoaComponent;
  let fixture: ComponentFixture<ListarFormatoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFormatoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFormatoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
