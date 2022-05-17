import { Country } from './../../interfaces/pais.interface';
import { Component } from '@angular/core';

import { PaisService } from './../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {
  public termino        : string = '';
  public hayError       : boolean = false;
  public paises         : Country[] = [];
  public paisesSugeridos: Country[] = [];

  constructor( private paisService: PaisService ) { }


  public buscar( termino: string ) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarPais( this.termino )
      .subscribe( (paises) => {
        console.log( paises );
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  public sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais( termino )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0, 3),
        (err) => this.paisesSugeridos = []
      );
  }
 

}
