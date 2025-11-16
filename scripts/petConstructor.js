// Pet Constructor Function
function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

// Create initial pets
let pet1 = new Pet("Fluffy", 4, "Female", "Persian Cat", "Grooming", "Cat");
let pet2 = new Pet("Buddy", 2, "Male", "Labrador", "Bath", "Dog");
let pet3 = new Pet("Whiskers", 1, "Male", "Maine Coon", "Nail Trim", "Cat");

// Array to hold all constructor pets
let constructorPets = [pet1, pet2, pet3];

// Display the number of constructor pets
function displayConstructorPetCount() {
    let count = constructorPets.length;
    let element = document.getElementById("constructorPetCount");
    if (element) {
        element.innerHTML = count;
    }
}

// Display constructor pet names
function displayConstructorPetNames() {
    let petNamesHTML = "";
    
    for (let i = 0; i < constructorPets.length; i++) {
        petNamesHTML += `<li class="list-group-item">${constructorPets[i].name} (${constructorPets[i].type})</li>`;
    }
    
    let element = document.getElementById("constructorPetNames");
    if (element) {
        element.innerHTML = petNamesHTML;
    }
}

// Display pets as cards
function displayPetCards() {
    let cardsHTML = "";
    
    for (let i = 0; i < constructorPets.length; i++) {
        let pet = constructorPets[i];
        cardsHTML += `
            <div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${pet.name}</h5>
                        <p class="card-text">
                            <strong>Age:</strong> ${pet.age} years<br>
                            <strong>Breed:</strong> ${pet.breed}<br>
                            <strong>Gender:</strong> ${pet.gender}<br>
                            <strong>Service:</strong> ${pet.service}<br>
                            <strong>Type:</strong> ${pet.type}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    
    let container = document.getElementById("petCardsContainer");
    if (container) {
        container.innerHTML = cardsHTML;
    }
}

// Function to register a new pet from the form
function registerPet(event) {
    event.preventDefault();
    
    // Get form values
    let name = document.getElementById("petName").value;
    let age = document.getElementById("petAge").value;
    let breed = document.getElementById("petBreed").value;
    let gender = document.getElementById("petGender").value;
    let service = document.getElementById("petService").value;
    
    // Determine pet type based on breed
    let type = "";
    if (breed.includes("Cat") || breed === "Persian Cat" || breed === "Maine Coon" || breed === "Siamese") {
        type = "Cat";
    } else {
        type = "Dog";
    }
    
    // Create new pet using constructor
    let newPet = new Pet(name, age, gender, breed, service, type);
    
    // Add to pets array
    constructorPets.push(newPet);
    
    // Update displays
    displayConstructorPetCount();
    displayConstructorPetNames();
    displayPetCards();
    
    // Reset form
    document.getElementById("petRegistrationForm").reset();
    
    // Show success message
    alert(`${name} has been successfully registered!`);
}

// Initialize display when page loads
displayConstructorPetCount();
displayConstructorPetNames();
displayPetCards();

// Attach form submit event listener
let form = document.getElementById("petRegistrationForm");
if (form) {
    form.addEventListener("submit", registerPet);
}