import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-grupoalumnos',
  templateUrl: './listar-grupoalumnos.component.html',
  styleUrls: ['./listar-grupoalumnos.component.css']
})
export class ListarGrupoalumnosComponent implements OnInit {

  gruposa:any;

  constructor(
    private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router
  ) { 

    this.crudServicio.ListarGruposA().subscribe(
      respuesta=>{
      //console.log(respuesta);
      this.gruposa=respuesta;
       }
    )
  }

  ngOnInit(): void {
  }

}
