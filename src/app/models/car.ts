export class Car {
    Id: string = ""
    Brand: string = ""
    Model: string = ""
    Year: number = 2017
    Image: string = ""
    Available : boolean = false

    constructor(id: string, brand: string, model: string = "", image:string = "", year: number = 2017 ){
        this.Id = id
        this.Brand = brand
        this.Image = image
        this.Available = true
        this.Model = model
        this.Year = year;

    }
}