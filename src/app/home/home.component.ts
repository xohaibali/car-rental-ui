import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerComponent } from '../customer/customer.component';
import { VendorComponent } from '../vindor/vendor.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, CustomerComponent, FormsModule,VendorComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedRole: string = '';
  roleForm: FormGroup; 
  vendor(){
    console.log("/app-vendor")
  }
  constructor(private fb: FormBuilder) {
    this.roleForm = this.fb.group({
      role: [''] // default value for the role selection
    });
  }
  


}
