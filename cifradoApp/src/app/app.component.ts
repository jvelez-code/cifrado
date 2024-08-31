import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CodificarService } from './_services/codificar.service';
import { Parametro } from './_model/parametro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cifradoApp';

  clave: string = '';
  mensaje: string = '';
  cifrado: string = '';
  descifrado: string = '';
  parametro !: Parametro; 

  constructor( private codificarService: CodificarService){

  }

  aceptarCi(){

    this.parametro = {
      textoPlano: this.mensaje,
      clave: this.clave
    };

    this.codificarService.cifrado(this.parametro).subscribe( data =>{
      console.log(data,'HOLASSSSA');
      this.cifrado= data.textoCifrado;
    });
  }


  aceptarDe(){

    this.parametro = {
      textoPlano: this.mensaje,
      textoCifrado: this.cifrado,
      clave: this.clave
    };

    this.codificarService.descifrado(this.parametro).subscribe( data =>{
      console.log(data,'54564');
      this.descifrado= data.textoDescifrado;
    });
  }


}
