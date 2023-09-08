import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  titulo="Registro de Usuarios";
  mensaje="";
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas:any;
 
  constructor(){

    this.entradas=[
      {titulo:"Python cada día mas presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez mas funcional"},
      {titulo:"Kotlyn potencia para tus apps"},
      {titulo:"¿Dónde quedó Pascall?"},
    ]
  }

  registrarUsuario(){

    this.registrado=true

    this.mensaje="usuario registrado con éxito"
  }
}
