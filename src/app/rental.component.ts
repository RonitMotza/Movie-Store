import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { RentalService } from './rental.service';
import { MovieService } from './movie.service';
import { CustomersService } from './customers.service';


@Component({
    selector: 'rental',
    templateUrl: './rental.component.html'

    ,
    styleUrls: ['./rental.component.css'],
    providers: [RentalService, CustomersService,MovieService]

})
export class RentalComponent {
    isFormShow1: boolean;
    isFormShow2: boolean;

    movieId: number;
    custId: number;
    arItems: any[];
    arItemsCus: any[];
  arItemsMov: any[];

    constructor(private service: RentalService, private serviceCus: CustomersService,private serviceMov: MovieService, ) {
        let req = this.service.Get();
        req.subscribe(rsp => {
            if (rsp.status == 200) {
                this.arItems = rsp.json();
            }
            else { console.log("server responded error : " + rsp); }
        },
            (err) => {
                console.log("error : " + err);
            });


        let req2 = this.serviceCus.Get();
        req2.subscribe(rsp => {
            if (rsp.status == 200) {
             
                this.arItemsCus = rsp.json();

            }
            else { console.log("server responded error : " + rsp); }
        },
            (err) => {
                console.log("error : " + err);
            });
            
 let req3 = this.serviceMov.Get();
        req3.subscribe(rsp => {
            if (rsp.status == 200) {
                this.arItemsMov = rsp.json();
            }
            else { console.log("server responded error : " + rsp); }
        },
            (err) => {
                console.log("error : " + err);
            }); 
    }



    submitHandler1(myNgForm: any) {
        this.isFormShow1 = false;
        const body = { MovieId: this.movieId, CustomerId: this.custId };
        /*let user = new User(); user.Name = body.Name; user.Email = body.Email; user.Street = body.Street;*/

        const req = this.service.Post(body);
        req.subscribe(rsp => {
            if (rsp.status == 201) {
                this.arItems = rsp.json();
                
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


    showForm1() {
        this.isFormShow1 = !this.isFormShow1;
    }


}