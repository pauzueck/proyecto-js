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



    const plantsCollection = [MONSTERA, PEPEROMIA, RUBBER, FIDDLE, JADE, PEACE, SNAKE];    

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
                    <p>${plant.price} ${plant.currency}</p>
                    <button onclick="addToCart(${plant.id}, '${plant.plantName}', ${plant.price}, '${plant.currency}')" class="styleButton" id="boton${plant.id}">Add to Cart</button>
                    </div>
                </div>            
                `
            PLANT_CONTAINER.appendChild(card)
        });

    };

    displayPlantOptions();


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

    const emptyButton = document.getElementsByClassName('emptyButton');

    function emptyCart(){
        localStorage.removeItem('shoppingCart');
        displayShoppingCart();
    }

    const CHECKOUT = document.getElementById("checkoutSuccess");
    CHECKOUT.addEventListener("click", checkout);

    function checkout() {
        const storedCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
        
        if (storedCart.length > 0) {
        Swal.fire({
            text: "Thank you for Shopping with Plantlife",
            icon: "success",
        }); 
        localStorage.removeItem('shoppingCart');
        displayShoppingCart();

        } else {
            Swal.fire({
                text: "You shopping cart is empty",
                icon: "warning",
            });
        }
    }