import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(
    private _http: HttpClient
  ) { }

  public getData() {
    return this._http.get('assets/data.json')
      // .pipe(
      //   map(val => {

      //   })
      // )
  }
}
