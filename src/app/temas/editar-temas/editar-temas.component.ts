import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-temas',
  templateUrl: './editar-temas.component.html',
  styleUrls: ['./editar-temas.component.css']
})
export class EditarTemasComponent implements OnInit {

  formularioGrupo:FormGroup;
  elID:any;

  constructor( private activoRow:ActivatedRoute, private crudServicio:CrudService, public formulario:FormBuilder, private ruta:Router ) {

    this.formularioGrupo = this.formulario.group({
      id:[''],
      nombre:['']
    });

    this.elID=this.activoRow.snapshot.paramMap.get('id');

    this.crudServicio.MostrarTema(  this.elID ).subscribe(respuesta=>{
      //  alert(respuesta);
      this.formularioGrupo.setValue({
        id:respuesta[0]['id'],
        nombre:respuesta[0]['nombre']
      });
    });

  }

  ngOnInit(): void {
  }

  enviardatos():any  {
    // console.log( this.formularioGrupo.value );
    this.crudServicio.ModificarTema(this.elID,this.formularioGrupo.value).subscribe(

      respuesta=>{
        this.ruta.navigateByUrl('/listartemas');
      }

    );

  }



}








