import {Injectable} from '@angular/core';
import{Employee} from './employee.model';
import{EmployeeDetails} from'./employee.component';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeFetch{
    
    data:any = [];
    array:any;
    value:any;
    setData(data:any){
        this.data.push(data);

    }
    getData():any{
        return this.data;
        
    }
    getvalue():any{
        return this.value;
    }
    setvalue(data:any){
        this.value=data;
    }

}