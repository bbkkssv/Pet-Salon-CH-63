// Pet Constructor - creates pet objects with consistent properties
function Pet(name, age, gender, breed, service, type, color) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
    this.color = color;
}

// Create 3 initial pets using the constructor
let pet1 = new Pet("Fluffy", 4, "Female", "Persian Cat", "Grooming", "Cat", "White");
let pet2 = new Pet("Buddy", 2, "Male", "Labrador", "Bath", "Dog", "Golden");
let pet3 = new Pet("Whiskers", 1, "Male", "Maine Coon", "Nail Trim", "Cat", "Gray");

// Array to store all pets (starts with our 3 initial pets)
let constructorPets = [pet1, pet2, pet3];

// Creates HTML for one table row with pet info and action buttons
function displayRow(pet, index) {
    let row = `
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.breed}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.color}</td>
            <td>${pet.type}</td>
            <td>
                <button class="btn btn-sm btn-warning me-2" onclick="editPet(${index})">
                    <i class="bi bi-pencil-fill"></i> Edit
                </button>
                <button class="btn btn-sm btn-danger" onclick="deletePet(${index})">
                    <i class="bi bi-trash-fill"></i> Delete
                </button>
            </td>
        </tr>
    `;
    return row;
}

// Loop through all pets and display them in the table
function displayPetTable() {
    let tableHTML = "";
    for (let i = 0; i < constructorPets.length; i++) {
        tableHTML += displayRow(constructorPets[i], i);
    }
    let tableBody = document.getElementById("petTableBody");
    if (tableBody) {
        tableBody.innerHTML = tableHTML;
    }
}

// Register a new pet from the form
function registerPet(event) {
    event.preventDefault();
    let name = document.getElementById("petName").value;
    let age = document.getElementById("petAge").value;
    let breed = document.getElementById("petBreed").value;
    let gender = document.getElementById("petGender").value;
    let service = document.getElementById("petService").value;
    let color = document.getElementById("petColor").value;
    let type = "";
    if (breed.includes("Cat") || breed === "Persian Cat" || breed === "Maine Coon" || breed === "Siamese") {
        type = "Cat";
    } else {
        type = "Dog";
    }
    let newPet = new Pet(name, age, gender, breed, service, type, color);
    constructorPets.push(newPet);
    updateAllDisplays();
    document.getElementById("petRegistrationForm").reset();
}

// Delete a pet from the array
function deletePet(index) {
    if (confirm(`Are you sure you want to delete ${constructorPets[index].name}?`)) {
        constructorPets.splice(index, 1);
        updateAllDisplays();
    }
}

// Edit an existing pet - loads data into form
function editPet(index) {
    let pet = constructorPets[index];
    document.getElementById("petName").value = pet.name;
    document.getElementById("petAge").value = pet.age;
    document.getElementById("petBreed").value = pet.breed;
    document.getElementById("petGender").value = pet.gender;
    document.getElementById("petService").value = pet.service;
    document.getElementById("petColor").value = pet.color;
    constructorPets.splice(index, 1);
    updateAllDisplays();
    document.getElementById("petRegistrationForm").scrollIntoView({ behavior: 'smooth' });
}

// Update the pet count display
function displayPetCount() {
    let petCountElement = document.getElementById("petCount");
    if (petCountElement) {
        petCountElement.textContent = constructorPets.length;
    }
}

// Show the first 3 pets in the initial pets list
function displayInitialPets() {
    let petListElement = document.getElementById("petList");
    if (petListElement) {
        let listHTML = "";
        for (let i = 0; i < 3 && i < constructorPets.length; i++) {
            listHTML += `
                <li class="list-group-item">
                    <strong>${constructorPets[i].name}</strong> 
                    <span class="text-muted">(${constructorPets[i].type})</span>
                </li>
            `;
        }
        petListElement.innerHTML = listHTML;
    }
}

// Update table, count, and initial pets list all at once
function updateAllDisplays() {
    displayPetTable();
    displayPetCount();
    displayInitialPets();
}

// Initialize displays when page loads
updateAllDisplays();
