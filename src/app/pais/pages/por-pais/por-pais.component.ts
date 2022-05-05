import { Country } from './../../interfaces/pais.interface';
import { Component } from '@angular/core';

import { PaisService } from './../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  public termino : string = '';
  public hayError: boolean = false;
  public paises  : Country[] = [];

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
    // TODO: Crear sugerencia
  }
 

}
