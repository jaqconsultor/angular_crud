import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-temas',
  templateUrl: './listar-temas.component.html',
  styleUrls: ['./listar-temas.component.css']
})
export class ListarTemasComponent implements OnInit {

  registros:any;


  constructor(private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router) {

    this.crudServicio.ListarTemas().subscribe(respuesta=>{
      //console.log(respuesta);
      this.registros=respuesta;

  });

   }

  ngOnInit(): void {
  }

  borrarRegistro( id: any, icontrol: any ) {
  
    this.crudServicio.BorrarEmpleado( id ).subscribe(
      respuesta=>{
       // this.ruta.navigateByUrl('/listar');
        this.registros.splice( icontrol, 1);
      }
    );

  }


}




