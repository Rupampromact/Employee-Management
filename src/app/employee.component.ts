import { Component,OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
    selector: 'myapp',
    templateUrl: './employee.html'
})
export class EmployeeDetails implements OnInit {
    qualifications :string [];
    experiences :string [];
    coding_languages:string [];
    dummy_language=[];
    check ( lang: string)
    {
      for(var i=0;i<5;i++)
      {
        var marker=0;
        if (this.dummy_language[i] == lang)
        {
          marker=1;
          break;
        }
      }
        if(marker==1)
        {
          this.dummy_language.splice(i,1);
        }
        else{
          this.dummy_language.push(lang);
        }
     
    }
   


ngOnInit()
{
    this.qualifications =['B.tech','M.tech','MBA','BCA'];
    this.experiences =['Fresher','Less than 5 years','More than 5 years'];
    this.coding_languages=['C/C++','Java','C#','PHP','python'];
}

 model = new Employee('','','','','','','','','','', this.dummy_language );

OnSubmit(model:string)
{
    console.log(model);
}
}