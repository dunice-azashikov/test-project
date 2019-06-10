import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(
    private _http: HttpClient
  ) { }

  public getData() {
    return this._http.get('assets/data.json')
  }
}