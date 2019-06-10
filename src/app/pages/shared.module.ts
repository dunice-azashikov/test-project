import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class SharedModule { }
