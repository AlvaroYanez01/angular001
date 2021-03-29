import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 diaSemana:string  = "Martes 2 de Marzo del 2021";
 
 nombre:string = "Alvaro";
 apellido:string ="Yanez";

  /*-----------------------------------------------------------------*/
  cadenaTexto: string ='Ingrese Datos';

  rutaImagen:string="http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png";

  /*CREAR UN CONSTRUCTOR */
  activado =true;

//Event Binding


textoEventBinding: string ="Este es un ejemplo de Event Binding"


//two way binding

cadenaTwoWayBinding: string ='FISEI';

  constructor(){
    setInterval(()=> (this.activado=false), 3000)
  }


 sumar(numero:number,numero2:number){

  return numero+numero2;

 }

 mostrarMensaje(){
   return this.cadenaTexto;
 }

cambiarTexto(): void{
this.textoEventBinding = "EL texto ha cambiado esta es la prueba";
}

}



