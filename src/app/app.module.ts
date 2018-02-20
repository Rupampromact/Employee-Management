import { EmployeeDetails } from './employee.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http'
import {EmployeeList} from './employeelist.component';
import {FirstPage} from './home.component'
import { AppComponent } from './app.component';
import { EmployeeFetch } from './employee.service'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetails,
    EmployeeList,
    FirstPage
  ],
  imports: [
    BrowserModule,
     HttpModule,
                RouterModule.forRoot([{path:'list',component:EmployeeList},
                {path:'home',component:FirstPage},
                {path:'',redirectTo:'home',pathMatch:'full'},
                {path:'registration',component:EmployeeDetails}]),

    FormsModule
  ],
  providers: [EmployeeFetch],
  bootstrap: [AppComponent]
})
export class AppModule { }