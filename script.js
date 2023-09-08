// Get references to the necessary elements
const containerOne = document.querySelector(".container-one");
const containerTwo = document.querySelector(".container-two");
const randomPicturesDiv = document.querySelector(".random-pictures");
const kitchenDivs = document.querySelectorAll(".kitchen");
const firstFoodImage = document.querySelector(".first-food img");
const firstFoodName = document.querySelector(".first-food h2");
const foodListContainer = document.querySelector(".second-food .food-list");
const selectedFoodImage = document.querySelector(".container-three #food-image");
const foodName = document.querySelector(".container-three #food-name");
const foodPriceContainer = document.querySelector(".container-three .food-price");
const preparationOrderButtons = document.querySelectorAll(".container-three .order-button");
const enterButton = document.querySelector("#enter-button");
const usernameInput = document.querySelector("#username-input");
const usernameElement = document.querySelector("#username");
const orderedFoodImage = document.querySelector("#ordered-food-image");
const containerThree = document.querySelector(".container-three");
const containerFour = document.querySelector(".container-four");
const containerFive = document.querySelector(".container-five");
const orderButtons = document.querySelectorAll(".container-three .order-button");
const searchInput = document.getElementById("search-field");



const foodImages = [
    "./images/Palava Sauce Rice.png",
    "./images/Check Rice & Gravy- loaded.png",
    "./images/Fried Eggplant with rice.png",
    "./images/Fried Potato green.png",
    "./images/Red Oil Cassava Leaves.png",
    "./images/Bitterleaf and fufu.png",
    "./images/palm-butter.jpg",
    "./images/Achekeh.jpg",
    "./images/Fufu-and-soup.jpg",
    "./images/fried-okra-soup.jpg",
    "./images/dry-rice.jpg"
  ];

// Function to display a random image from the array
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * foodImages.length);
    const randomImage = foodImages[randomIndex];

    randomPicturesDiv.innerHTML = `<img src="${randomImage}" alt="Random Food Image">`;
}
displayRandomImage();



setInterval(displayRandomImage, 5000);





  // List of food items with image URLs and names
const kitchenItems = [
    { imageUrl: "./images/Bitterleaf and fufu.png", name: "Quita's Kitchen" },
    { imageUrl: "./images/Check Rice & Gravy- loaded.png", name: "Ma B's Restaurant" },
    { imageUrl: "./images/Palava Sauce Rice.png", name: "Community Food" },
    { imageUrl: "./images/palm-butter.jpg", name: "One Plus One Food" },
    { imageUrl: "./images/Achekeh.jpg", name: "Hannah's Ajekeh" },
    { imageUrl: "./images/Fufu-and-soup.jpg", name: "Alice's Fufu Shop" },
    { imageUrl: "./images/Peanut Butter Soup.png", name: "Stop and Eat" },
    { imageUrl: "./images/Red Oil Cassava Leaves.png", name: "Geeta's Restaurant" },
    { imageUrl: "./images/Red Oil Potatoe Green.png", name: "Loleyah's Restaurant" },
    { imageUrl: "./images/red-oil-bitterball.jpg", name: "Siah's Place" },
    { imageUrl: "./images/fried-okra-soup.jpg", name: "Come and Eat" },
    { imageUrl: "./images/dry-rice.jpg", name: "Try My Food" }, 
];

// Function to populate the kitchen divs with food images and names
function populateKitchenDivs() {
    kitchenDivs.forEach((kitchenDiv, index) => {
        const kitchenItem = kitchenItems[index % kitchenItems.length]; 

        const imgElement = kitchenDiv.querySelector("img.kitchen-image");
        if (imgElement) {
            imgElement.src = kitchenItem.imageUrl;
            imgElement.alt = kitchenItem.name;
        }

        const nameElement = kitchenDiv.querySelector("p.kitchen-name");
        if (nameElement) {
            nameElement.textContent = kitchenItem.name;
        }
    });
}
populateKitchenDivs();




// Function to filter and display kitchens based on search input
function filterKitchens(searchTerm) {
    const searchTermLowerCase = searchTerm.toLowerCase();

    kitchenDivs.forEach(kitchenDiv => {
        const kitchenName = kitchenDiv.querySelector(".kitchen-name").textContent.toLowerCase();

        if (kitchenName.includes(searchTermLowerCase)) {
            kitchenDiv.style.display = "block";
        } else {
            kitchenDiv.style.display = "none";
        }
    });
}

// Event listener for search input changes
searchInput.addEventListener("input", function () {
    const searchTerm = this.value;
    filterKitchens(searchTerm);
});






// Sample kitchen data (replace this with your actual data)
const kitchenData = [
    {
        name: "Quita's Kitchen",
        foodItems: [
            {
                name: "Bitterleaf and Fufu",
                preparations: [
                    { name: "Bitterleaf and fufu", price: "$350", imageUrl: "./images/Bitterleaf and fufu.png" },
                    { name: "Fufu and Soup", price: "$400", imageUrl: "./images/Fufu-and-soup.jpg" }
                ]
            },
            {
                name: "Fried Plantains",
                preparations: [
                    { name: "Crispy Fried", price: "$200", imageUrl: "./images/crispy-fried-plantain.jpg" },
                    { name: "Softly Fried", price: "$250", imageUrl: "./images/soft-fried-plantain.jpg" }
                ]
            }
        ]
    },
    {
        name: "Ma B's Restaurant",
        foodItems: [
            {
                name: "Check Rice & Gravy",
                preparations: [
                    { name: "Check Rice & Gravy", price: "$300", imageUrl: "./images/Check Rice & Gravy- loaded.png" },
                    { name: "Check Rice & Stew", price: "$250", imageUrl: "./images/check-rice-and-stew.jpg" }
                ]
            },
            {
                name: "Bitterball Soup",
                preparations: [
                    { name: "Fried Bitterball", price: "$300", imageUrl: "./images/fried-bitterball.jpg" },
                    { name: "Red Oil Bitterball", price: "$300", imageUrl: "./images/red-oil-bitterball.jpg" }
                ]
            }
        ]
    },
    {
        name: "Community Food",
        foodItems: [
            {
                name: "Palava Sauce",
                preparations: [
                    { name: "Palava Sauce", price: "$300", imageUrl: "./images/Palava Sauce Rice.png" },
                    { name: "Red Oil Palava Sauce", price: "$250", imageUrl: "./images/red-oil-palava-sauce.jpg" }
                ]
            },
            {
                name: "Jollof Rice",
                preparations: [
                    { name: "Jollof and Chicken", price: "$300", imageUrl: "./images/jollof-and-chicken.jpg" },
                    { name: "Jollof and Meat", price: "$300", imageUrl: "./images/jollof-and-meat.jpeg" }
                ]
            }
        ]
    },
    {
        name: "One Plus One Food",
        foodItems: [
            {
                name: "Palm Butter",
                preparations: [
                    { name: "Palm Butter", price: "$300", imageUrl: "./images/palm-butter.jpg" },
                    { name: "Thick Palm Butter", price: "$250", imageUrl: "./images/Palm-butter-soup.jpg" }
                ]
            },
            {
                name: "Bitterball Soup",
                preparations: [
                    { name: "Fried Eggplant", price: "$300", imageUrl: "./images/Fried Eggplant with rice.png" },
                    { name: "Red Oil Bitterball", price: "$300", imageUrl: "./images/red-oil-bitterball.jpg" }
                ]
            }
        ]
    },
    {
        name: "Hannah's Achekeh",
        foodItems: [
            {
                name: "Achekeh",
                preparations: [
                    { name: "Achekeh", price: "$300", imageUrl: "./images/Achekeh.jpg" },
                    { name: "Check Rice & Stew", price: "$250", imageUrl: "./images/check-rice-and-stew.jpg" }
                ]
            },
            {
                name: "Fried Plantain",
                preparations: [
                    { name: "Crispy Fried", price: "$300", imageUrl: "./images/crispy-fried-plantain.jpg" },
                    { name: "Softly Fried", price: "$300", imageUrl: "./images/soft-fried-plantain.jpg" }
                ]
            }
        ]
    },
    {
        name: "Alice's Fufu Shop",
        foodItems: [
            {
                name: "Fufu and Soup",
                preparations: [
                    { name: "Fufu and Soup", price: "$300", imageUrl: "./images/Fufu-and-soup.jpg" },
                    { name: "Fufu and Okra Soup", price: "$250", imageUrl: "./images/fufu-and-okra-soup.jpg" }
                ]
            },
            {
                name: "Peanut Butter Fufu",
                preparations: [
                    { name: "Peanut Butter Fufu", price: "$300", imageUrl: "./images/fufu-and-peanut-butter.jpg" },
                    { name: "Fufu Pepper Soup", price: "$300", imageUrl: "./images/fufu-pepper-soup.jpg" }
                ]
            }
        ]
    },
    {
        name: "Stop and Eat",
        foodItems: [
            {
                name: "Peanut Butter Soup",
                preparations: [
                    { name: "Peanut Butter Soup", price: "$300", imageUrl: "./images/Peanut Butter Soup.png" },
                    { name: "Peanut Butter Pepper Soup", price: "$250", imageUrl: "./images/peanut-butter-pepper-soup.jpg" }
                ]
            },
            {
                name: "Bitterball Soup",
                preparations: [
                    { name: "Fried Bitterball", price: "$300", imageUrl: "./images/fried-bitterball.jpg" },
                    { name: "Red Oil Bitterball", price: "$300", imageUrl: "./images/red-oil-bitterball.jpg" }
                ]
            }
        ]
    },
    {
        name: "Geetah's Restaurant",
        foodItems: [
            {
                name: "Check Rice & Gravy",
                preparations: [
                    { name: "Check Rice & Gravy", price: "$300", imageUrl: "./images/Red Oil Cassava Leaves.png" },
                    { name: "Fried Cassava Leaves", price: "$250", imageUrl: "./images/fried-cassava-leaves.webp" }
                ]
            },
            {
                name: "Bitterball Soup",
                preparations: [
                    { name: "Fried Bitterball", price: "$300", imageUrl: "./images/fried-bitterball.jpg" },
                    { name: "Red Oil Bitterball", price: "$300", imageUrl: "./images/red-oil-bitterball.jpg" }
                ]
            }
        ]
    },
    {
        name: "Loleyah's Restaurant",
        foodItems: [
            {
                name: "Check Rice & Gravy",
                preparations: [
                    { name: "Check Rice & Gravy", price: "$300", imageUrl: "./images/Red Oil Potatoe Green.png" },
                    { name: "Fried Potatoe Greens", price: "$250", imageUrl: "./images/Fried Potato green.png" }
                ]
            },
            {
                name: "Bitterball Soup",
                preparations: [
                    { name: "Fried Bitterball", price: "$300", imageUrl: "./images/fried-bitterball.jpg" },
                    { name: "Red Oil Bitterball", price: "$300", imageUrl: "./images/red-oil-bitterball.jpg" }
                ]
            }
        ]
    },
    {
        name: "Siah's Place",
        foodItems: [
            {
                name: "Bitterball Soup",
                preparations: [
                    { name: "Bitterball Soup", price: "$300", imageUrl: "./images/red-oil-bitterball.jpg" },
                    { name: "Fried Bitterball", price: "$300", imageUrl: "./images/fried-bitterball.jpg" }
                ]
            },
            {
                name: "Check Rice & Gravy",
                preparations: [
                    { name: "Check Rice & Gravy", price: "$300", imageUrl: "./images/Check Rice & Gravy- loaded.png" },
                    { name: "Check Rice & Stew", price: "$250", imageUrl: "./images/check-rice-and-stew.jpg" }
                ]
            }
            
        ]
    },
    {
        name: "Come and Eat",
        foodItems: [
            {
                name: "Fried Okra Soup",
                preparations: [
                    { name: "Fried Okra Soup", price: "$300", imageUrl: "./images/fried-okra-soup.jpg" },
                    { name: "Red Oil Okra", price: "$250", imageUrl: "./images/red-oil-okra.webp" }
                ]
            },
            {
                name: "Palm Butter Soup",
                preparations: [
                    { name: "Watery Palm Butter", price: "$300", imageUrl: "./images/palm-butter.jpg" },
                    { name: "Thick Palm Butter", price: "$300", imageUrl: "./images/Palm-butter-soup.jpg" }
                ]
            }
        ]
    },
    {
        name: "Try my food",
        foodItems: [
            {
                name: "Dry Rice",
                preparations: [
                    { name: "Dry Rice", price: "$300", imageUrl: "./images/dry-rice.jpg" },
                    { name: "Dry Rice and Beans", price: "$250", imageUrl: "./images/dry-rice-and-beans.jpg" }
                ]
            },
            {
                name: "Bitterball Soup",
                preparations: [
                    { name: "Fried Bitterball", price: "$300", imageUrl: "./images/fried-bitterball.jpg" },
                    { name: "Red Oil Bitterball", price: "$300", imageUrl: "./images/red-oil-bitterball.jpg" }
                ]
            }
        ]
    },
];

// Function to show food items for the clicked kitchen
function showFoodItems(kitchenName) {
    const clickedKitchen = kitchenData.find(kitchen => kitchen.name === kitchenName);

    // Display the first food's image and name in the first-food div
    const firstFood = clickedKitchen.foodItems[0].preparations[0];
    firstFoodImage.src = firstFood.imageUrl;
    firstFoodImage.alt = firstFood.name;
    firstFoodName.textContent = firstFood.name;

    // Clear existing content in the food list
    foodListContainer.innerHTML = "";

    // Populate the food list with food items from the clicked kitchen
    clickedKitchen.foodItems.forEach(foodItem => {
        const foodItemPrep = foodItem.preparations[0];

        const foodItemDiv = document.createElement("div");
        foodItemDiv.classList.add("food-item");

        const foodItemImage = document.createElement("img");
        foodItemImage.src = foodItemPrep.imageUrl;
        foodItemImage.alt = foodItem.name;

        const foodItemName = document.createElement("p");
        foodItemName.textContent = foodItem.name;

        foodItemDiv.appendChild(foodItemImage);
        foodItemDiv.appendChild(foodItemName);

        foodListContainer.appendChild(foodItemDiv);
    });

    // Show container-two and hide container-one
    containerTwo.style.display = "block";
    containerOne.style.display = "none";
}



// Attach click event listeners to kitchen divs
kitchenDivs.forEach(kitchenDiv => {
    const kitchenName = kitchenDiv.querySelector("p.kitchen-name").textContent;

    kitchenDiv.addEventListener("click", function () {
        showFoodItems(kitchenName);
    });
    
    // Add this event listener to hide container-one when the kitchen is clicked
    kitchenDiv.addEventListener("click", function () {
        containerOne.style.display = "none";
    });
});





// Function to show food details in container-three
function showFoodDetails(foodItem) {
    // Display the selected food's image in container-three
    selectedFoodImage.src = foodItem.preparations[0].imageUrl;
    selectedFoodImage.alt = foodItem.name;


    foodName.textContent = foodItem.name;
    foodPriceContainer.textContent = `Price: ${foodItem.preparations[0].price}`;

    // Add event listeners to preparation order buttons
    preparationOrderButtons.forEach((button, index) => {
        button.addEventListener("click", function () {

            localStorage.setItem("orderedFoodImage", foodItem.preparations[index].imageUrl);

            containerThree.style.display = "none";
            containerFour.style.display = "block";
        });
    });

    // Show container-three and hide container-two
    containerTwo.style.display = "none";
    containerThree.style.display = "block";
}


// Attach click event listener to food list items
foodListContainer.addEventListener("click", function (event) {
    const clickedFoodItem = event.target.closest(".food-item");
    if (clickedFoodItem) {
        const foodName = clickedFoodItem.querySelector("p").textContent;
        const clickedKitchen = kitchenData.find(kitchen => {
            return kitchen.foodItems.some(foodItem => foodItem.name === foodName);
        });

        const foodItem = clickedKitchen.foodItems.find(foodItem => foodItem.name === foodName);
        showFoodDetails(foodItem);
    }
});





// Event listener for the "Complete Order" button
enterButton.addEventListener("click", function () {
    const username = usernameInput.value;
    usernameElement.textContent = username;

    containerFour.style.display = "none";
    containerFive.style.display = "block";
});



// Initialize the ordered food image from local storage
const orderedFoodImageUrl = localStorage.getItem("orderedFoodImage");
if (orderedFoodImageUrl) {
    orderedFoodImage.src = orderedFoodImageUrl;
}





