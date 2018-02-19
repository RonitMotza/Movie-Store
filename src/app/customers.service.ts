import { Http } from '@angular/http';
 import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';


export class CustomersService {
    private url: string;
    Get() {
        return this.http.get(this.url);
    }
    Post(body: any) {
        return this.http.post(this.url, body)
    }
    upload(fileToUpload: any) {
    let input = new FormData();
    input.append("file", fileToUpload);

    return this.http.post("http://localhost:54842/api/Items", input);
}
    constructor( @Inject(Http) private http: Http) {
        this.url = "http://localhost:54842/api/Items";
    }
}
