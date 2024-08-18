import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { CarComponent } from './car/car.component';
import { VendorComponent } from './vindor/vendor.component';


export const routes: Routes = [

    {path:"", redirectTo: 'home', pathMatch: 'full'},
    {path:"home",component:HomeComponent},
    {path:"vendor",component:VendorComponent},
    {path :"customer", component:CustomerComponent},
    {path:"car",component:CarComponent}
];

