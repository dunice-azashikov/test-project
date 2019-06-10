import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class SharedModule { }
