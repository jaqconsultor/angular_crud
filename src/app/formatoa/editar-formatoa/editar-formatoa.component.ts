
import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-formatoa',
  templateUrl: './editar-formatoa.component.html',
  styleUrls: ['./editar-formatoa.component.css']
})
export class EditarFormatoaComponent implements OnInit {

  formularioGrupo: FormGroup;
  elID: any;

  constructor(private activoRow: ActivatedRoute, private crudServicio: CrudService, public formulario: FormBuilder, private ruta: Router) {

    this.formularioGrupo = this.formulario.group({
      id: [''],
      nombre: ['']
    });

    this.elID = this.activoRow.snapshot.paramMap.get('id');

    this.crudServicio.MostrarFormatoa(this.elID).subscribe(respuesta => {
      //  alert(respuesta);
      this.formularioGrupo.setValue({
        id: respuesta[0]['id'],
        nombre: respuesta[0]['nombre']
      });
    });

  }

  ngOnInit(): void {
  }

  enviardatos(): any {
    // console.log( this.formularioGrupo.value );
    this.crudServicio.ModificarFormatoa(this.elID, this.formularioGrupo.value).subscribe(
      respuesta => {
        this.ruta.navigateByUrl('/listarformatoa');
      }
    );

  }
}








