import { Injectable, Output, EventEmitter } from '@angular/core';
import { Task } from './interface/task';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddingFormHandlerService {
  public adding = new Subject<Boolean>(); 
  @Output() item: EventEmitter <Task> = new EventEmitter()

  watchAdding(): Observable <Boolean> {
    return this.adding.asObservable();
  }   
  
}
