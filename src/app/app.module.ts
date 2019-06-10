import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './pages/tables/tables.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { DirectiveStylingComponent } from './pages/directive-styling/directive-styling.component';
import { SharedModule } from './pages/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from './directives/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    LandingComponent,
    NavBarComponent,
    DirectiveStylingComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
