import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewAccountService {
  account = {
    username:"",
    password: "",
    objective: [] as any[]
  }
  constructor() { }
}
