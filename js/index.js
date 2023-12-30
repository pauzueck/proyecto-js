// Constructor para crear las plantas
class Plant {
    constructor(id, plantName, price, currency, img) {
        this.id = id;
        this.plantName = plantName;
        this.price = price;
        this.currency = currency;
        this.img = img;
        this.qty = 1;
    }
}

//Array plantas

    const MONSTERA = new Plant(1, "Monstera", 28.00, "USD", "./assets/monstera.jpg");
    const PEPEROMIA = new Plant(2, "Peperomia", 30.00, "USD", "./assets/chinesemp.jpg");
    const RUBBER = new Plant(3, "Rubber Plant", 25.00, "USD", "./assets/rubberplant.jpg");
    const FIDDLE = new Plant(3, "Fiddle Leaf Fig", 15.00, "USD", "./assets/fiddleleaffig.jpg");
    const JADE = new Plant(3, "Jade Plant", 18.00, "USD", "./assets/jadeplant.jpg");
    const PEACE = new Plant(3, "Peace Lilly", 22.00, "USD", "./assets/peacelilly.jpg");
    const SNAKE = new Plant(3, "Snake Plant", 20.00, "USD", "./assets/snakeplant.jpg");
    const PEACOCK = new Plant(3, "Peacock Plant", 18.00, "USD", "./assets/peacockplant.jpg");
    const FICUS = new Plant(3, "Ficus", 13.00, "USD", "./assets/ficus.jpg");
    const POTHOS = new Plant(3, "Pothos", 16.00, "USD", "./assets/pothos.jpg");




    const plantsCollection = [MONSTERA, PEPEROMIA, RUBBER, FIDDLE, JADE, PEACE, SNAKE, PEACOCK, FICUS, POTHOS];    

//Array carrito

    let shoppingCart = [];

    console.log(plantsCollection);

    //DOM

    const PLANT_CONTAINER = document.getElementById("plantContainer");

    //Enseñando las opciones de plantas con función ahora con cards

    const displayPlantOptions = () => {

        plantsCollection.forEach(plant => {
            const card = document.createElement("div");
            card.innerHTML = 
            `
                <div class="card">
                <img src="${plant.img}" class="card-img-tom imgPlant" />
                <div class="card-body">
                    <h2>${plant.plantName}</h2>
                    <p>$ ${plant.price} ${plant.currency}</p>
                    <button onclick="addToCart(${plant.id}, '${plant.plantName}', ${plant.price}, '${plant.currency}')" class="styleButton" id="boton${plant.id}">Add to Cart</button>
                    </div>
                </div>            
                `
            PLANT_CONTAINER.appendChild(card)
        });

    };

    displayPlantOptions();

//Agregar al carrito, JSON Storage y Sweet Alert

    function addToCart(id,plantName,price,currency){
        let shoppingCart= JSON.parse(localStorage.getItem('shoppingCart')) || [];
        
        shoppingCart.push({id, plantName, price, currency});

        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        displayShoppingCart();
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        
        Toast.fire({
            icon: "success",
            title: `${plantName} added to the shopping cart`
        });

    };

    //Armando la lista en el carrito y la suma del total

    function displayShoppingCart() {
        const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        const shoppingList = document.getElementById('shoppingList');
        const totalToPay = document.getElementById('total');
        let total = 0; 

        shoppingList.innerHTML = '';

        shoppingCart.forEach(plant => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${plant.plantName}</span>
                <span>${plant.price} ${plant.currency}</span>
            `;
            shoppingList.appendChild(listItem);

            total += plant.price;

        });

        totalToPay.textContent = total.toFixed(1); 
    };

    //función para vaciar el carrito

    const emptyButton = document.getElementsByClassName('emptyButton');

    function emptyCart(){
        localStorage.removeItem('shoppingCart');
        displayShoppingCart();
    }


    // Condición para "comprar" si hay productos en el carrito o para decir que el carrito está vacío. 
    //Alertas con Sweet Alert y operador ternario

    const CHECKOUT = document.getElementById("checkoutSuccess");
    CHECKOUT.addEventListener("click", checkout);


    function checkout() {
        const storedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        
        (storedCart.length > 0) ?
        (
        Swal.fire({
            text: "Thank you for Shopping with Plantlife",
            icon: "success",
        }),
        localStorage.removeItem('shoppingCart'),
        displayShoppingCart()
        ) : 
            Swal.fire({
                text: "You shopping cart is empty",
                icon: "warning",
            });
    }
    
    const loginButton = document.querySelector('.loginButton');
    const modal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');


    loginButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "plantlover" && (password === "plantlife" || PASSWORD === "1234")) {
        console.log("Welcome to PlantLife Marketplace!");
        modal.style.display = 'none';
    } else {
        alert('Please try again.');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});

const apiWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=19.4326&lon=-99.133209&appid=8aae4d886afb9f947d510793e90c54a0';

function updateTemperature(temperature) {
const temperatureElement = document.getElementById('temperature');
    temperatureElement.textContent = `Today's Temperature: ${temperature}°C`; 
}

    fetch(apiWeather)
    .then(response => {
        if (!response.ok) {
        throw new Error('Error!');
        }
        return response.json();
    })
    .then(data => {
        const temperature = data.main.temp; 
        const temperatureInCelsius = Math.round(temperature - 273.15); 
        updateTemperature(temperatureInCelsius);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
    