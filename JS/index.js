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