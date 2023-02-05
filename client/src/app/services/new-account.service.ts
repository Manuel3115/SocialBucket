import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  account = {
    username:"",
    password: "",
    objective: [] as any[]
  }
  constructor() { }
}
