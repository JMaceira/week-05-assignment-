//Creating my own menu for cars in a garage

class Car {                         //created car class
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;                 //gave values for brand and model type.
    }

    describe() {                            // created description function inside car class to describe the the car models and brands.
        return `${this.brand} is ${this.model}.`;
    }
}

class Garage {
    constructor(name) {
        this.name = name;
        this.cars = [];
    } 

    addCar(car) {                        //created adding car function inside garage class with parameter of (car) to be able to add cars to the garage class.
        if (car instanceof Car) {          // created (instance0f) to be able to push (car) to the car array once created.
        this.cars.push(car);
        } else {
            throw new Error(`You can only add an instance of car. Argument is not a car: ${car} `);     //created error incase (argument) is not a car.
        }
    }

    describe() {
        return `${this.name} has ${this.cars.length} these cars.`;           
    }
}

class Menu {                    //created menu class 
    constructor() {
        this.garages = [];      //created values for garages as empty array to be able to input and add garages later on.
        this.selectedGarage = null; //created values for selectedGarage to null so it can start at none or no value until later selected.
    }

    start() {                                           //created start function inside menu class to start the application
        let selection = this.showMainMenuOptions();     // created selection and main menu option selector function with case switching statement.
   
        while (selection != 0) {                        // used a while loop to be able to select which option or case to take action.
        switch (selection) {
            case '1':                                   // created different functions for each case in the switch/case statment to be able to do different actions.
                this.createGarage();
                break;
            case '2':
                this.viewGarage();
                break;
            case '3':
                this.deleteGarage();
                break;
            case '4':
                this.displayAllGarages();
                break;
            default:
                selection = 0;
        }
        selection = this.showMainMenuOptions();          //once user makes their selection it should show the selection maid based on the showmainmenuoption function.
        }
        alert('Goodbye!');                              //if statement ends up being 0 or false in this case it would prompt an alert saying goodbye.
    }

    showMainMenuOptions() {                             //created the working showmainmenu function to be able to return/show what the user would see.
        return prompt(`
            0) back
            1) create new garage
            2) view garage
            3) delete garage
            4) display all garages
        `)                                          // used backticks to be able to create seperate lines for each option.
    }

    showGarageMenuOptions(garageInfo) {
        return prompt (`
        0) back
        1) create car
        2) remove Car
        --------------------
        ${garageInfo}
        `);
    }


    displayAllGarages(){                             //created function to display all garages
        let garageString = '';                          //created garageString as empty to be able to later on add the garage information depending on which was selected.
        for (let i = 0; i < this.garages.length; i++){                  //created for loop to be able to iterate over the garages length and be able to show selected garage.
            garageString += i + ') ' + this.garages[i].name + '\n'; 
        }
        alert(garageString);                                    //logs out the selected garage name
    }

    createGarage() {                                         //created create garage function to be able to input information for new garage.
        let name = prompt('Enter name for new garage:');        // created name variable with name string for later output.
        this.garages.push(new Garage(name));                    // used pushed method and gave it new garage class passing in the new (name) as parameter.
    }

    viewGarage() {                                                          //created viewGarage function 
        let index = prompt('Enter index of garage you wish to view: ');     //created prompt to show selection of which garage user would want to view.
        if (index > -1 && index < this.garages.length) {                    //created loop that does not let user input under 0 so it avoids crashing.
            this.selectedGarage = this.garages[index]; 
            let description = 'Garage Name: ' + this.selectedGarage.name + '\n';    //concatenated string variable with selected garage.name function and created a new line.
            
            for (let i = 0; i < this.selectedGarage.cars.length; i++) {             //created for loop to be able to view the selected car in the selected garage.
                description += i + ') ' + this.selectedGarage.cars[i].brand         //iterating through the index as it finds the selected garage cars brand and model..
                 + ' - ' + this.selectedGarage.cars[i].model + '\n';                //..concatenated with the description function and forming a new line.
            }

            let selection = this.showGarageMenuOptions(description);                //gave selection variable a function of showing garagemenu options.
            switch (selection) {                                                    //created switch statement to be able to give different viewing options to user.
                case '1':
                    this.createCar();
                    break;
                case '2':
                    this.removeCar();
            }
        }
    }

    deleteGarage() {                                                                //created delete car function for input to be added by user input.
        let index = prompt(`Enter the index of the garage you wish to delete: `);
        if (index > -1 && index < this.selectedGarage.garages.length){
            this.selectedGarage.garages.splice(index,1);
        }
    }

    createCar() {                                                               //created create car function for input to be added later by user input.
        let brand = prompt('Enter brand for new car: ');                        //gave brand variable a prompt for user to add new information for brand once creating car.
        let model = prompt('Enter model for new car: ');                           //gave model variable a prompt for user to add new information for model of car.
        this.selectedGarage.cars.push(new Car(brand, model));                   //used push method to be able to output the new information obtained from the user.
    }           

    removeCar() {                                                               
        let index = prompt('Enter the index of the car you wish to remove: ');        //gave index prompt value for user to be able to enter the index to delete.
        if (index > -1 && index < this.selectedGarage.cars.length) {                //created loop to be able to select the index through cars players length. 
            this.selectedGarage.cars.splice(index, 1);                          //used slice method for user to be able to input the index it wants to remove and continue to log whats left.
        }
    }
}



let menu = new Menu();                                                          //created new menu class 
menu.start();                                                                   //called for the new menu class created to show the start.