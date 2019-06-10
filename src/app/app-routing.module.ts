import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { TablesComponent } from './pages/tables/tables.component';
import { DirectiveStylingComponent } from './pages/directive-styling/directive-styling.component';

const routes: Routes = [
  {
    path:'portal',
    component: NavBarComponent,
    children: [
      {
        path:'',
        component: TablesComponent,
        pathMatch: 'full'
      },
      {
        path:'directives',
        component: DirectiveStylingComponent,
      },
    ]
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path:'**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
