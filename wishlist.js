import Car from "./car";

export default class Wishlist {
    //two class properties
    list = [];
    nextId = 0;


    //two methods
    add(make, model, year){
        //use the Car class to create a new car
        let car = new Car(this.nextId++, make, model, year);
        //add that car to the wishlist list
        this.list.push(car);
    }
    remove(carId) {
        //find the car in the wishlist list that matches the remove id
        let index = this.list.findIndex((car) => car.id == carId);
        //remove it and update wishlist list
        this.list.splice(index, 1);
        //or with filter
        //this.list = this.list.filter((car) => car.id != carId);
    }
    
};

