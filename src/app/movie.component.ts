import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { MovieService } from './movie.service'

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html'

    ,
    styleUrls: ['./movie.component.css'],
       providers: [MovieService]

})
export class MovieComponent {
    isFormShow1: boolean;
    isFormShow2: boolean;
    name: string;
    cate: string;
    arItems: any[];

   

    constructor(private service :MovieService) {
        let req = this.service.Get();
        req.subscribe(rsp => {
            this.arItems = rsp.json();
        
        });
    }



    submitHandler1(myNgForm: any) {
  this.isFormShow1 = false;
        const body = { Movie: this.name, Category: this.cate };
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