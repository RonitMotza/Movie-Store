import { Http } from '@angular/http';
 import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Inject } from '@angular/core';




export class MovieService {
    private url: string;
    Get() {
        return this.http.get(this.url);
    }
    Post(body: any) {
        return this.http.post(this.url, body)
    }
    constructor( @Inject(Http) private http: Http) {
        this.url = "http://localhost:49469/api/movies";
    }
}
