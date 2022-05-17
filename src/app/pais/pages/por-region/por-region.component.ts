import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin: 5px 5px 0 0;
      }
    `
  ]
})
export class PorRegionComponent {

  public regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  public regionActiva: string = '';
  public paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  public getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  public activarRegion( region: string ) {
    if (region === this.regionActiva) {
      return
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegiones( region )
      .subscribe( (paises) => {
        console.log(paises)
        this.paises = paises;
      } );
  }



}
