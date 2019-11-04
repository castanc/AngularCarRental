export class Car {
    Id: string
    Brand: string
    Image: string
    Available : boolean

    constructor(id: string, brand: string, image:string ){
        this.Id = id
        this.Brand = brand
        this.Image = image
        this.Available = true;
    }
}