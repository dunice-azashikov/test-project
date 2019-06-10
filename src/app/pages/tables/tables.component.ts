import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { TableDataService } from 'src/app/services/tables-service/table-data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  public tableData;
  public displayedColumns = [];
  //   {
  //     title: "ID",
  //     field: "id",
  //   },
  //   {
  //     title: "Type",
  //     field: "type",
  //   },
  //   {
  //     title: "Content",
  //     field: "attributes",
  //     subfield: "content",
  //   },
  //   {
  //     title: "Link",
  //     field: "links",
  //     subfield: "self",
  //   },
  //   {
  //     title: "Relationship Author",
  //     field: "relationships",
  //     subfield: "authors",
  //     subfield2: "links",
  //     subfield3: "self",
  //   },
  //   {
  //     title: "Relationship Publishers",
  //     field: "relationships",
  //     subfield: "publishers",
  //     subfield2: "links",
  //     subfield3: "self",
  //   }
  // ];
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
          this.displayedColumns = Object.keys(data[0]);
          this.tableData = new MatTableDataSource(data);
          this.tableData.sort = this.sort;
        },
        err => console.log(err)
      )
  }

  public applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();
  }
}
