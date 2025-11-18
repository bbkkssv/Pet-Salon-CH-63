// Pet Registration JavaScript

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

// Display a single pet as a table row
function displayRow(pet) {
    let row = `
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.breed}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
        </tr>
    `;
    return row;
}

// Display all pets in the table
function displayPetTable() {
    let tableHTML = "";
    
    for (let i = 0; i < constructorPets.length; i++) {
        tableHTML += displayRow(constructorPets[i]);
    }
    
    let tableBody = document.getElementById("petTableBody");
    if (tableBody) {
        tableBody.innerHTML = tableHTML;
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
    displayPetTable();
    
    // Reset form
    document.getElementById("petRegistrationForm").reset();
    
    
}

// Initialize display when page loads
displayConstructorPetCount();
displayConstructorPetNames();
displayPetTable();