import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolidaysOverviewComponent } from './components/holidays-overview/holidays-overview.component';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { CreateEmployeeComponent } from './components/holidays-overview/components/create-employee/create-employee.component';
import { HolidayListComponent } from './components/holidays-overview/components/holiday-list/holiday-list.component';
import { CreateHolidayComponent } from './components/holidays-overview/components/create-holiday/create-holiday.component';
import { FindHolidaysOfEmployeeComponent } from './components/holidays-overview/components/find-holidays-of-employee/find-holidays-of-employee.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HolidaysOverviewComponent,
    CreateEmployeeComponent,
    HolidayListComponent,
    CreateHolidayComponent,
    FindHolidaysOfEmployeeComponent
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  exports: [
    CreateEmployeeComponent,
    HolidayListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
