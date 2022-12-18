import Wishlist from "./wishlist";

console.log("Hello World");

let wishlist = new Wishlist();

//select the form
let form = document.querySelector("#submitForm");
//select the input for the car
let makeInput = document.querySelector("#makeInput");
//select the infput for the car model
let modelInput = document.querySelector("#modelInput");
//select the input for the year
let yearInput = document.querySelector("#yearInput");
//select the paragraph element for the car make
let makeDisplay = document.querySelector("#car-make");
//select the paragrph element for the car model
let modelDisplay = document.querySelector("#car-model");
//select the paragraph ele. for the car year
let yearDisplay = document.querySelector("#car-year");
//select the remove button
let removeBtn = document.querySelector("#removeBtn");
//select the wishlist unordered list element
let listUL = document.querySelector("#wishListContainer > ul");

//Event Listeners
form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

//Functions

function showCarDetailes(car) {
    //update car display texts
    makeDisplay.textContent = car.make;
    modelDisplay.textContent = car.model;
    yearDisplay.textContent = car.year;
    //enable the remove button
    removeBtn.disabled = false;
    //set the current car's id to the data-carId attribute of removeBtn
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMlist() {
    //clear the ul contents
    listUL.innerHTML = "";

    //iterate through the list of cars
    wishlist.list.forEach((car) => {
        //add a li to the ul for each car
        let li = document.createElement("li")
        li.textContent = car.model;
        // add a click event listener to showCarDetails per list item click
        li.addEventListener("click", () => showCarDetailes(car));
        listUL.appendChild(li);
    });
}

function addCar(event) {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    wishlist.add(make, model, year);

    updateDOMlist();

    //reset form values
    makeInput.value = "";
    modelInput = "";
    yearInput = "";
}

function removeCar() {
    //get the displayed car's id
    let carId = Number(removeBtn.getAttribute("data-carId"));

    //remove the selected car
    wishlist.remove(carId);

    //update the dom list
    updateDOMlist();

    //reset display values
    makeDisplay.textContent = "";
    modelDisplay.textContent = "";
    yearDisplay.textContent = "";

    //disable remove button
    removeBtn.disabled = true;
};