import { Output, OnInit } from '@angular/core';
import { User } from '../models/user'
import { Customer } from '../models/customer'
import { Utils } from '../common/utils'
import { Car } from '../models/car'
import { CarRental } from '../models/car-rental'
import { Brand } from '../models/Brand'
import { EventEmitter } from "@angular/core";
import { FormsModule, NgForm } from '@angular/forms';

export class CarRentalService implements OnInit{
    @Output() carRented = new EventEmitter<string>();
    user: User = null;

    Users: Array<User> = []
    NoCustomers: boolean = false;
    Customer: Customer
    Customers: Array<Customer> = []
    Cars: Array<Car> = []
    CarRentals: Array<CarRental> = []
    Brands: Array<Brand> = []

    u: Utils = new Utils();

Message: string = "Welcome to the Car Rental";

ngOnInit(){
    this.populateBrands()
    this.populateCars()
}

GetAvailableCars()
{
    return this.Cars.filter(x=>x.Available)
}

Rent(car: Car){
    return true;
}

CustomerExists(name:string){
    let found = this.Customers.filter(x=> x.name == name )[0];
    return found != null
}

GetCustomer(name:string){
    return this.Customers.filter(x=> x.name == name )[0];
}

GetBrandImage(brand: string){
    return this.Brands.filter(x=> x.Id == brand )[0].Image;
}


AddCustomer( cu: Customer):boolean
{
    console.log('AddCustomer')
    console.log(cu)
    if ( !this.CustomerExists(cu.name))
    {
        this.Customer = cu;
        this.Customers.push(cu);
        this.Message = "Customer Added succesfully."
        this.Save();
        return true;
    }
    else{
        this.Message = "Customer name is already used.";
        alert(`Customer ${cu.name} is already used`)
        console.log(`Customer ${cu.name} is already used`)
        console.log(this.Customers)
    }
    return false;
}

Save() {
    let s = JSON.stringify(this.Customers)
    localStorage.setItem('Customers', s)

    //s = JSON.stringify(this.Cars)
    //localStorage.setItem("Cars",s)

    s = JSON.stringify(this.CarRentals)
    localStorage.setItem("CarRentals",s)

    if ( this.Users.length > 0 ){
        s = JSON.stringify(this.Users)
        localStorage.setItem("Users",s)
    }
}   

Load() {
    let s = localStorage.getItem("Customers")
    this.Customers = JSON.parse(s)
    if ( this.Customers == null )
        this.Customers = []

        /*
    s = localStorage.getItem("Cars")    
    this.Cars = JSON.parse(s)
    if ( this.Cars == null ) {
        this.Cars = []
    }
    */

    s = localStorage.getItem("CarRentals")    
    this.CarRentals = JSON.parse(s)
    if ( this.CarRentals == null ) {
        this.Cars = []
    }

    s = localStorage.getItem("Users")    
    this.Users = JSON.parse(s)
    if ( this.Users == null ) {
        this.Users = []
        let u = new User();
        u.name = "admin"
        u.password = "admin"
        u.isAdmin = true;
        this.Users.push(u);
        this.NoCustomers = true;
    }
}

populateBrands(){
    this.Brands = []
    this.Brands.push(new Brand("ford",""))
    this.Brands.push(new Brand("audi",""))
    this.Brands.push(new Brand("bugati",""))
    this.Brands.push(new Brand("lamborgini",""))
    this.Brands.push(new Brand("rollsroyce",""))
    this.Brands.push(new Brand("renault",""))
    this.Brands.push(new Brand("chevrolet",""))
}

populateCars(){
    this.Cars = []
    this.Cars.push(new Car("1","ford",""))
    this.Cars.push(new Car("2","ford",""))
    this.Cars.push(new Car("3","bugati",""))
    this.Cars.push(new Car("4","audi",""))
    this.Cars.push(new Car("5","lamborgini",""))
    this.Cars.push(new Car("6","rollsroyce",""))
    this.Cars.push(new Car("7","renault",""))
    this.Cars.push(new Car("8","chevrolet",""))
    this.Cars.push(new Car("9","ford",""))
    this.Cars.push(new Car("10","ford",""))
    this.Cars.push(new Car("11","bugati",""))
    this.Cars.push(new Car("12","audi",""))
    this.Cars.push(new Car("13","lamborgini",""))
    this.Cars.push(new Car("14","rollsroyce",""))
    this.Cars.push(new Car("15","renault",""))
    this.Cars.push(new Car("16","chevrolet",""))
    this.Cars.push(new Car("17","ford",""))
    this.Cars.push(new Car("18","ford",""))
    this.Cars.push(new Car("19","bugati",""))
    this.Cars.push(new Car("20","audi",""))
    this.Cars.push(new Car("21","lamborgini",""))
    this.Cars.push(new Car("22","rollsroyce",""))
    this.Cars.push(new Car("23","renault",""))
    this.Cars.push(new Car("24","chevrolet",""))
}

}