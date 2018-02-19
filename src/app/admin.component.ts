import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { CustomersService } from './customers.service';

@ViewChild("fileInput") fileInput;
@Component({
    selector: 'admin',
    templateUrl: './admin.component.html'

    ,
    styleUrls: ['./customers.component.css'],
    providers: [CustomersService]


})
export class AdminComponent {
  

    constructor(private service: CustomersService) {
      
    }

addFile(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this.uploadService
            .upload(fileToUpload)
            .subscribe(res => {
                console.log(res);
            });
    }
}
}