import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino : string = '';
  public hayError: boolean = false;
  public paises  : Country[] = [];

  constructor( private paisService: PaisService ) { }


  public buscar( termino: string ) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital( this.termino )
      .subscribe( (paises) => {
        console.log( paises );
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }


}
