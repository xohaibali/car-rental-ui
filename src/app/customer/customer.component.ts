import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

data:Customer[]=[]
  constructor(private customerService:CustomerService){}
  
    getData(): void {
      this.customerService.getData().subscribe(
        data => {
         this.data=data;
        },
        
      );
    }

    Onsubmit(): void {
      this.customerService.postData(this.data).subscribe(
        (response) => {
          console.log('Data submitted successfully:', response);
          this.data=response;
        },
        
      );
    }

}
