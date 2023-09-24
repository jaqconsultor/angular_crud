import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicios/crud.service';
import { Router } from '@angular/router';
import { LeerapiService } from 'src/app/servicio/leerapi.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  registros:any;

title = "Titulo de Prueba";


body = "Cuerpo de Prueba";


 footer = "Pie de Pagia nde prueba";

 infoapi = "Waiting for...";

 mayus = "";
 resto = "";

  constructor(  private crudServicio:CrudService, private serviapi:LeerapiService, private ruta:Router ) {

    this.crudServicio.ListarEmpleado().subscribe(respuesta=>{
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




