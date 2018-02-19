import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { CustomersService } from './customers.service'

@Component({
    selector: 'customers',
    templateUrl: './customers.component.html'

    ,
    styleUrls: ['./customers.component.css'],
    providers: [CustomersService]


})
export class CustomerComponent {
    isFormShow1: boolean;

    name: string;
    cate: string;
    age: number;
    arItems: any[];
    error = "";


    constructor(private service: CustomersService) {
        let req = this.service.Get();
        req.subscribe(rsp => {
            this.arItems = rsp.json();

        });
    }



    submitHandler1(myNgForm: any) {
if(this.age>17){
        const body = { Name: this.name, subscriberType: this.cate, Age: this.age };
        /*let user = new User(); user.Name = body.Name; user.Email = body.Email; user.Street = body.Street;*/

        const req = this.service.Post(body);
        req.subscribe(rsp => {
            if (rsp.status == 201) {
               
                    this.arItems = rsp.json()
                    this.arItems.push(body);

                    console.log("success : " + rsp);
            }

            else { console.log("server responded error : " + rsp); }
        },
            (err) => {
                console.log("error : " + err);
            }
        );
}
else{
    alert("you must be more then 18 years");
     
}
    }


    showForm1() {
        this.isFormShow1 = !this.isFormShow1;
    }


}