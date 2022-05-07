import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string> = new Subject();
  public termino  : string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    });
  }

  public buscar() {
    this.onEnter.emit( this.termino );

  }

  public teclaPresionada() {
    this.debouncer.next( this.termino );
  }


}
