import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavToggleService {

  private change = new Subject();

  toggle$ = this.change.asObservable();

  constructor() { }

  toggle() {
    this.change.next();
  }
}
