import { Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title$: Observable<string>;
  private titleSubject: Subject<string> = new Subject();

  constructor(private title : Title) {
    this.title$ = this.titleSubject.asObservable(); 
  }

  setTitle(title: string, titleMenu: boolean = true){
    if(titleMenu){
      this.titleSubject.next(title);
    }
    
    this.title.setTitle(title);
  }

}
