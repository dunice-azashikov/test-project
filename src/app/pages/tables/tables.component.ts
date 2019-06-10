import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { TableDataService } from 'src/app/services/tables-service/table-data.service';
import { TableData } from 'src/app/interfaces/table-data';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  public tableData;
  public displayedColumns = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private _tableData: TableDataService
  ) { }

  ngOnInit() {
    this._tableData.getData()
      .subscribe(
        ({
          data
        }: {
          data: Array<Object>
        }) => {
          const mappedData = data.map((ele: TableData) => ({
            id: ele.id,
            type: ele.type,
            content: ele.attributes.content,
            link: ele.links.self,
            "relationship author link": ele.relationships.authors.links.self,
            "relationship publisher link": ele.relationships.publishers.links.self,
          }))
          this.displayedColumns = Object.keys(mappedData[0]);
          this.tableData = new MatTableDataSource(mappedData);
          this.tableData.sort = this.sort;
        },
        err => console.log(err)
      )
  }

  public applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();
  }
}
