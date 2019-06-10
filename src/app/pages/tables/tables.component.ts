import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  public tableData;
  public displayedColumns;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this._http.get('assets/data.json').subscribe(
      ({
        data
      }: {
        data: Array<Object>
      }) => {
        this.displayedColumns = Object.keys(data[0]);
        this.tableData = new MatTableDataSource(data);
        this.tableData.sort = this.sort;
      },
      err => console.log(err)
    )
  }

}
