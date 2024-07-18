import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterSearchServiceService {
  filter$: Observable<string>;
  private filterSubject: Subject<string> = new Subject();

  constructor() { 
    this.filter$ = this.filterSubject.asObservable(); 
  }

  setSearch(search: string){
    this.filterSubject.next(search);
  }
}
