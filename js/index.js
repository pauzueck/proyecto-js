// Login Marketplace
const USERNAME = prompt("Username: ").toLowerCase();
const PASSWORD = prompt("Password: ").toLowerCase();

if (USERNAME === "plantlover" && (PASSWORD === "plantlife" || PASSWORD === "1234")) {
    console.log("Welcome to PlantLife Marketplace!");


// Constructor para crear las plantas
class Plant {
    constructor(plantName, price, currency) {
        this.plantName = plantName;
        this.price = price;
        this.currency = currency;
    }
}

//Creando el array de plantas
function createPlants() {
    const plants = []; 

    plants.push(new Plant("1. Monstera", 28.00, "USD"));
    plants.push(new Plant("2. Peperomia", 30.00, "USD"));
    plants.push(new Plant("3. Rubber Plant", 25.00, "USD"));

    return plants;
}

const plantsCollection = createPlants();

//Enseñando las opciones de plantas con función 

    function displayPlantOptions() {
        console.log("Available Plants:");
        plantsCollection.forEach((plant) => {
            console.log(`${plant.plantName}: $${plant.price} ${plant.currency}`);
        });
    }

    displayPlantOptions();

//Loop para escoger

let continueChoosing = true;
let totalCost = 0;



while (continueChoosing) {
    const userChoice = prompt("Which plant do you want? (Enter plant number): ");

    const choiceNumber = parseInt(userChoice);

    if (choiceNumber >= 1 && choiceNumber <= plantsCollection.length) {
        const chosenPlant = plantsCollection[choiceNumber - 1];
        totalCost += chosenPlant.price;
        console.log(`You chose ${chosenPlant.plantName}. It costs $${chosenPlant.price} ${chosenPlant.currency}.`);
    } else {
        console.log("Invalid choice. Please select a valid option (1, 2, or 3).");
    }

    const continueBuying = prompt("Do you want to choose another plant? (yes/no)");
    if (continueBuying.toLowerCase() !== 'yes') {
        continueChoosing = false;
    }
}


//Enseñando el costo total y el currency de la primera planta
console.log(`Your total is: $${totalCost} ${plantsCollection[0].currency}`);
}