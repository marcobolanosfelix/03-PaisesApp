import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from './../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';


  constructor( private http: HttpClient ) { }

  public get httpParams(): HttpParams {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  public buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }  

  public buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }  

  public getPaisPorAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }  

  public buscarRegiones( region: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/regionalbloc/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

}
