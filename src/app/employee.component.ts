import { Component,OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
    selector: 'myapp',
    templateUrl: './employee.html'
})
export class EmployeeDetails implements OnInit {
    qualifications :string [];
    experiences :string [];
    languages:string [];
    dummy_language=[];
   check(lang:string)
   {
      var marker=0;
      for(var loop=0;loop<5;loop++)
      {
      if(this.dummy_language[loop]==lang)
      {
        marker=1;
        break;
      }
      }
      if(marker==1)
      {
      this.dummy_language.splice(loop,1);
      }
      else
      {
      this.dummy_language.push(lang);
      }
      
   }
   


ngOnInit()
{
    this.qualifications =['B.tech','M.tech','MBA','BCA'];
    this.experiences =['Fresher','Less than 5 years','More than 5 years'];
    this.languages=['C/C++','Java','C#','PHP','python'];
}

 model = new Employee('','','','','','','','','','', this.dummy_language );

OnSubmit(model:string)
{
    console.log(model);
}
}