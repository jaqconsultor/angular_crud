import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  registros:any;

  constructor(
    private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router
  ) { 

    this.crudServicio.ListarUsuarios().subscribe(
      respuesta=>{
      //console.log(respuesta);
      this.registros=respuesta;
       }
    )
  }


  ngOnInit(): void {
  }

}
