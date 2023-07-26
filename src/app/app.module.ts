import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarComponent } from './componentes/listar/listar.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';
import { ListarTemasComponent } from './temas/listar-temas/listar-temas.component';
import { EditarTemasComponent } from './temas/editar-temas/editar-temas.component';
import { AgregarTemasComponent } from './temas/agregar-temas/agregar-temas.component';
import { ListarTipoaComponent } from './tipoa/listar-tipoa/listar-tipoa.component';
import { EditarTipoaComponent } from './tipoa/editar-tipoa/editar-tipoa.component';
import { AgregarTipoaComponent } from './tipoa/agregar-tipoa/agregar-tipoa.component';
import { ListarFormatoaComponent } from './formatoa/listar-formatoa/listar-formatoa.component';
import { EditarFormatoaComponent } from './formatoa/editar-formatoa/editar-formatoa.component';
import { AgregarFormatoaComponent } from './formatoa/agregar-formatoa/agregar-formatoa.component';
import { ListarCursosComponent } from './cursos/listar-cursos/listar-cursos.component';
import { EditarCursosComponent } from './cursos/editar-cursos/editar-cursos.component';
import { AgregarCursosComponent } from './cursos/agregar-cursos/agregar-cursos.component';
import { ListarActividadesComponent } from './actividades/listar-actividades/listar-actividades.component';
import { EditarActividadesComponent } from './actividades/editar-actividades/editar-actividades.component';
import { AgregarActividadesComponent } from './actividades/agregar-actividades/agregar-actividades.component';
import { ListarGruposComponent } from './grupos/listar-grupos/listar-grupos.component';
import { EditarGruposComponent } from './grupos/editar-grupos/editar-grupos.component';
import { AgregarGruposComponent } from './grupos/agregar-grupos/agregar-grupos.component';
import { AgregarGrupoalumnosComponent } from './grupoalumnos/agregar-grupoalumnos/agregar-grupoalumnos.component';
import { EditarGrupoalumnosComponent } from './grupoalumnos/editar-grupoalumnos/editar-grupoalumnos.component';
import { ListarGrupoalumnosComponent } from './grupoalumnos/listar-grupoalumnos/listar-grupoalumnos.component';
import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { ListarCursosalumnosComponent } from './alumnos/listar-cursosalumnos/listar-cursosalumnos.component';
import { ListarActividadalumnosComponent } from './alumnos/listar-actividadalumnos/listar-actividadalumnos.component';
import { EditarCursosalumnosComponent } from './alumnos/editar-cursosalumnos/editar-cursosalumnos.component';
import { EditarActividadalumnosComponent } from './alumnos/editar-actividadalumnos/editar-actividadalumnos.component';
import { AgregarActividadalumnosComponent } from './alumnos/agregar-actividadalumnos/agregar-actividadalumnos.component';
import { AgregarCursosalumnosComponent } from './alumnos/agregar-cursosalumnos/agregar-cursosalumnos.component';
import { LoginFormularioComponent } from './usuarios/login-formulario/login-formulario.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    ListarTemasComponent,
    EditarTemasComponent,
    AgregarTemasComponent,
    ListarTipoaComponent,
    EditarTipoaComponent,
    AgregarTipoaComponent,
    ListarFormatoaComponent,
    EditarFormatoaComponent,
    AgregarFormatoaComponent,
    ListarCursosComponent,
    EditarCursosComponent,
    AgregarCursosComponent,
    ListarActividadesComponent,
    EditarActividadesComponent,
    AgregarActividadesComponent,
    ListarGruposComponent,
    EditarGruposComponent,
    AgregarGruposComponent,
    AgregarGrupoalumnosComponent,
    EditarGrupoalumnosComponent,
    ListarGrupoalumnosComponent,
    ListarUsuariosComponent,
    EditarUsuariosComponent,
    AgregarUsuariosComponent,
    ListarCursosalumnosComponent,
    ListarActividadalumnosComponent,
    EditarCursosalumnosComponent,
    EditarActividadalumnosComponent,
    AgregarActividadalumnosComponent,
    AgregarCursosalumnosComponent,
    LoginFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
