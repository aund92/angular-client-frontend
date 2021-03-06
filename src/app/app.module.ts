import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './employee/employee-details/employee-details.component';
import {UpdateEmployeeComponent} from './employee/update-employee/update-employee.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeroesComponent } from './heroes/heroes.component';
import {AppHeroesRoutingModule} from './heroes/app-heroes-routing.module';
import {AppEmployeeRoutingModule} from './employee/app-employee-routing.module';
import { HeroesHomeComponent } from './heroes/heroes-home/heroes-home.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { MessageComponent } from './heroes/message/message.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    SideBarComponent,
    HeroesComponent,
    HeroesHomeComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHeroesRoutingModule,
    AppEmployeeRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
