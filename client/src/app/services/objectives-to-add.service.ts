import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObjectivesToAddService {
  newObjectiveSubject = new Subject<any>()
  deleteObjectiveSubject = new Subject<any>()
  constructor() { }
}
