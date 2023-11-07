const USERNAME= prompt("Username: ").toLowerCase();
const PASSWORD= prompt("Password: ").toLowerCase();

if(USERNAME === "plantlover" &&(PASSWORD === "plantlife"|| PASSWORD === "1234")){
    console.log("Welcome to PlantLife Marketplace!");
} else {
    console.log("Try again!");
}
