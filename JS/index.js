//Login Marketplace

const USERNAME= prompt("Username: ").toLowerCase();
const PASSWORD= prompt("Password: ").toLowerCase();

if(USERNAME === "plantlover" &&(PASSWORD === "plantlife"|| PASSWORD === "1234")){
    console.log("Welcome to PlantLife Marketplace!");
} else {
    console.log("Try again!");
}


// Declarar los objetos

const plant1 = { 
    plantName: "Monstera", 
    price: 28.00, 
    currency: "USD" 
}

const plant2 = { 
    plantName: "Peperomia", 
    price: 30.00, 
    currency: "USD" 
}

const plant3 = { 
    plantName: "Rubber Plant", 
    price: 25.00, 
    currency: "USD" 
}


// Variables del loop y del total del precio

let continueChoosing = true;
let totalCost = 0;

//Loop

while (continueChoosing) {
    const userChoice = prompt("Which plant do you want? 1. Monstera 2. Peperomia 3. Rubber Plant");

    const choiceNumber = parseInt(userChoice);

//Condicionales de escoger planta

switch (choiceNumber) {
    case 1:
        totalCost += plant1.price;
        console.log("You chose " + plant1.plantName + ". It costs " + plant1.price + " " + plant1.currency + ".");
        break;
    case 2:
        totalCost += plant2.price;
        console.log("You chose " + plant2.plantName + ". It costs " + plant2.price + " " + plant2.currency + ".");
        break;
    case 3:
        totalCost += plant3.price;
        console.log("You chose " + plant3.plantName + ". It costs " + plant3.price + " " + plant3.currency + ".");
        break;
    default:
        console.log("Invalid choice. Please select a valid option (1, 2, or 3).");
}

// Sigue o para el loop

    const continueBuying = prompt("Do you want to choose another plant? (yes/no)");
    if (continueBuying.toLowerCase() !== 'yes') {
        continueChoosing = false;
    }
}

//Precio final de la compra

console.log("Your total is: " + totalCost + " " + plant1.currency);