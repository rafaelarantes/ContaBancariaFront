import { Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloService {
  titulo$: Observable<string>;
  private tituloSubject: Subject<string> = new Subject();

  constructor(private titleService : Title) {
    this.titulo$ = this.tituloSubject.asObservable(); 
  }

  setTitulo(titulo: string, tituloMenu: boolean = true){
    if(tituloMenu){
      this.tituloSubject.next(titulo);
    }
    
    this.titleService.setTitle(titulo);
  }

}
