import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Empleado
import { registro } from './registro';

// AulasCursos
import { tema } from './tema';
import { tipoa } from './tipoactividad';
import { formatoa } from './formatoa';


import { cursos } from './cursos';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  BASE: string = "http://localhost:8383/aulascursosya/"

  // Empleado
  API: string ='http://localhost:8383/empleados/agregar.php';
  APIC: string ='http://localhost:8383/empleados/consultar.php';
  APIM: string ='http://localhost:8383/empleados/modificar.php';
  APIE: string ='http://localhost:8383/empleados/eliminar.php';
  APIL: string ='http://localhost:8383/empleados/listar.php';

  //http://localhost:8383/aulascursosya/
      
  
  // Temas
  APIA_TEMA: string ='http://localhost:8383/aulascursosya/tema/agregar.php';
  APIC_TEMA: string ='http://localhost:8383/aulascursosya/tema/consultar.php';
  APIM_TEMA: string ='http://localhost:8383/aulascursosya/tema/modificar.php';
  APIE_TEMA: string ='http://localhost:8383/aulascursosya/tema/eliminar.php';
  APIL_TEMA: string ='http://localhost:8383/aulascursosya/tema/listar.php';

  // Tipo de Actividad
  APIA_TIPOA: string ='http://localhost:8383/aulascursosya/tipoactividad/agregar.php';
  APIC_TIPOA: string ='http://localhost:8383/aulascursosya/tipoactividad/consultar.php';
  APIM_TIPOA: string ='http://localhost:8383/aulascursosya/tipoactividad/modificar.php';
  APIE_TIPOA: string ='http://localhost:8383/aulascursosya/tipoactividad/eliminar.php';
  APIL_TIPOA: string ='http://localhost:8383/aulascursosya/tipoactividad/listar.php';

  // Formato de Actividad
  APIA_FORMA: string ='http://localhost:8383/aulascursosya/formatoarchivo/agregar.php';
  APIC_FORMA: string ='http://localhost:8383/aulascursosya/formatoarchivo/consultar.php';
  APIM_FORMA: string ='http://localhost:8383/aulascursosya/formatoarchivo/modificar.php';
  APIE_FORMA: string ='http://localhost:8383/aulascursosya/formatoarchivo/eliminar.php';
  APIL_FORMA: string ='http://localhost:8383/aulascursosya/formatoarchivo/listar.php';



  constructor( private clienteHTTP:HttpClient) { }

  ListarEmpleado():Observable<any> {
    return this.clienteHTTP.get(this.APIL);
  }

  AgregarEmpleado( datosRegistro:registro):Observable<any> {
    console.log( datosRegistro );
    return this.clienteHTTP.post(this.API,datosRegistro);
  }

  BorrarEmpleado( id:any ):Observable<any> {
       return this.clienteHTTP.get( this.APIE + "?id=" + id );
  }

  MostrarEmpleado( id:any ):Observable<any> {
       return this.clienteHTTP.get( this.APIC + "?id=" + id );
  }

  ModificarEmpleado( id:any, datosRegistro:registro):Observable<any> {
    //console.log( datosRegistro );
    return this.clienteHTTP.post(this.APIM + "?id=" + id,datosRegistro);
  }

  // Temas
  ListarTemas():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TEMA);
  }

  AgregarTema( datosRegistro:tema):Observable<any> {
    return this.clienteHTTP.post(this.APIA_TEMA,datosRegistro);
  }

  BorrarTema( id:any ):Observable<any> {
    return this.clienteHTTP.get( this.APIE_TEMA + "?id=" + id );
  }

  MostrarTema( id:any ):Observable<any> {
    return this.clienteHTTP.get( this.APIC_TEMA + "?id=" + id );
  }

  ModificarTema( id:any, datosRegistro:tema):Observable<any> {
    return this.clienteHTTP.post(this.APIM_TEMA + "?id=" + id,datosRegistro);
  }


  // Tipo de Actividad
  ListarTipoa():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TIPOA);
  }

  AgregarTipoa( datosRegistro:tipoa):Observable<any> {
    return this.clienteHTTP.post(this.APIA_TIPOA,datosRegistro);
  }

  BorrarTipoa( id:any ):Observable<any> {
    return this.clienteHTTP.get( this.APIE_TIPOA + "?id=" + id );
  }

  MostrarTipoa( id:any ):Observable<any> {
    return this.clienteHTTP.get( this.APIC_TIPOA + "?id=" + id );
  }

  ModificarTipoa( id:any, datosRegistro:tipoa):Observable<any> {
    return this.clienteHTTP.post(this.APIM_TIPOA + "?id=" + id,datosRegistro);
  }


// Formato de Archivo
  ListarFormatoa():Observable<any> {
    return this.clienteHTTP.get(this.APIL_FORMA);
  }

  AgregarFormatoa( datosRegistro:formatoa):Observable<any> {
    return this.clienteHTTP.post(this.APIA_FORMA,datosRegistro);
  }

  BorrarFormatoa( id:any ):Observable<any> {
    return this.clienteHTTP.get( this.APIE_FORMA + "?id=" + id );
  }

  MostrarFormatoa( id:any ):Observable<any> {
    return this.clienteHTTP.get( this.APIC_FORMA + "?id=" + id );
  }

  ModificarFormatoa( id:any, datosRegistro:formatoa):Observable<any> {
    return this.clienteHTTP.post(this.APIM_FORMA + "?id=" + id,datosRegistro);
  }





///////////////////////

/////
ListarCursos():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TEMA);
  }

  ListarActividades():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TEMA);
  }

  ListarGrupos():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TEMA);
  }

  ListarGruposA():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TEMA);
  }

  ListarUsuarios():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TEMA);
  }

  ListarAluC():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TEMA);
  }

  ListarAluA():Observable<any> {
    return this.clienteHTTP.get(this.APIL_TEMA);
  }



}

