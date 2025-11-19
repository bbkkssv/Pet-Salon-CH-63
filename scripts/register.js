// ========================================================
// PET REGISTRATION JAVASCRIPT
// ========================================================
// This file handles all pet registration functionality for registration.html
// It includes: Pet constructor, pet creation, form handling, table display,
// and edit/delete operations

// --------------------------------------------------------
// PET CONSTRUCTOR FUNCTION
// --------------------------------------------------------
// A constructor is a special function used to create objects with the same structure
// The "this" keyword refers to the new object being created
// When we call "new Pet(...)", JavaScript creates a new empty object and runs this function
function Pet(name, age, gender, breed, service, type, color) {
    this.name = name;        // Pet's name (e.g., "Fluffy")
    this.age = age;          // Pet's age in years (e.g., 4)
    this.gender = gender;    // Pet's gender ("Male" or "Female")
    this.breed = breed;      // Pet's breed (e.g., "Persian Cat")
    this.service = service;  // Service needed (e.g., "Grooming")
    this.type = type;        // Pet type ("Cat" or "Dog")
    this.color = color;      // Pet's color (e.g., "White")
}

// --------------------------------------------------------
// CREATE INITIAL PETS
// --------------------------------------------------------
// Using the "new" keyword with the Pet constructor to create pet objects
// Each pet is stored in a variable
let pet1 = new Pet("Fluffy", 4, "Female", "Persian Cat", "Grooming", "Cat", "White");
let pet2 = new Pet("Buddy", 2, "Male", "Labrador", "Bath", "Dog", "Golden");
let pet3 = new Pet("Whiskers", 1, "Male", "Maine Coon", "Nail Trim", "Cat", "Gray");

// --------------------------------------------------------
// PETS ARRAY
// --------------------------------------------------------
// An array to store all pet objects
// Arrays use square brackets [] and can hold multiple items
// We start with our 3 initial pets, and new registrations will be added here
let constructorPets = [pet1, pet2, pet3];

// --------------------------------------------------------
// DISPLAY SINGLE PET AS TABLE ROW
// --------------------------------------------------------
// This function takes a pet object and its index (position in array)
// and returns HTML for one table row with all pet information and action buttons
function displayRow(pet, index) {
    // Template literal (backticks) allows us to create multi-line HTML
    // ${} syntax inserts JavaScript values into the string
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
                <!-- Edit button: onclick calls editPet function with the pet's index -->
                <button class="btn btn-sm btn-warning me-2" onclick="editPet(${index})">
                    <i class="bi bi-pencil-fill"></i> Edit
                </button>
                <!-- Delete button: onclick calls deletePet function with the pet's index -->
                <button class="btn btn-sm btn-danger" onclick="deletePet(${index})">
                    <i class="bi bi-trash-fill"></i> Delete
                </button>
            </td>
        </tr>
    `;
    return row; // Return the HTML string
}

// --------------------------------------------------------
// DISPLAY ALL PETS IN TABLE
// --------------------------------------------------------
// This function loops through all pets in the array and displays them in the table
function displayPetTable() {
    let tableHTML = ""; // Start with empty string
    
    // For loop: starts at 0, continues while i < array length, increments by 1 each time
    // This visits each pet in the constructorPets array
    for (let i = 0; i < constructorPets.length; i++) {
        // Add each pet's row HTML to our tableHTML string
        // We pass the pet object and its index (i) to displayRow
        tableHTML += displayRow(constructorPets[i], i);
    }
    
    // Find the table body element in the HTML
    let tableBody = document.getElementById("petTableBody");
    
    // If the element exists, set its innerHTML to our generated HTML
    if (tableBody) {
        tableBody.innerHTML = tableHTML;
    }
}

// --------------------------------------------------------
// REGISTER NEW PET FROM FORM
// --------------------------------------------------------
// This function is called when the user clicks the "Register" button
// It collects form data, creates a new Pet object, and adds it to the array
function registerPet(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
    
    // Get values from each form input using their IDs
    // .value gets the text the user typed into each input field
    let name = document.getElementById("petName").value;
    let age = document.getElementById("petAge").value;
    let breed = document.getElementById("petBreed").value;
    let gender = document.getElementById("petGender").value;
    let service = document.getElementById("petService").value;
    let color = document.getElementById("petColor").value;
    
    // Automatically determine if pet is a cat or dog based on breed name
    let type = "";
    // .includes() checks if the breed contains "Cat", or matches specific cat breeds
    if (breed.includes("Cat") || breed === "Persian Cat" || breed === "Maine Coon" || breed === "Siamese") {
        type = "Cat";
    } else {
        type = "Dog"; // If not a cat, assume it's a dog
    }
    
    // Create a new Pet object using the constructor with all the form values
    let newPet = new Pet(name, age, gender, breed, service, type, color);
    
    // Add the new pet to the end of the constructorPets array
    // .push() is an array method that adds an item to the end
    constructorPets.push(newPet);
    
    // Refresh all displays to show the new pet
    updateAllDisplays();
    
    // Clear all form inputs so the user can register another pet
    // .reset() is a form method that clears all fields
    document.getElementById("petRegistrationForm").reset();
}

// --------------------------------------------------------
// DELETE PET FUNCTION
// --------------------------------------------------------
// This function removes a pet from the array and updates the table
// It receives the index (position) of the pet to delete
function deletePet(index) {
    // Show a confirmation dialog before deleting
    // confirm() returns true if user clicks OK, false if they click Cancel
    if (confirm(`Are you sure you want to delete ${constructorPets[index].name}?`)) {
        // .splice() removes items from an array
        // First parameter: starting index, Second parameter: how many items to remove
        constructorPets.splice(index, 1); // Remove 1 item at position 'index'
        
        // Refresh all displays to show the updated list without the deleted pet
        updateAllDisplays();
    }
}

// --------------------------------------------------------
// EDIT PET FUNCTION
// --------------------------------------------------------
// This function allows users to edit an existing pet
// It loads the pet's data into the form and removes the old entry
function editPet(index) {
    // Get the pet object at the specified index
    let pet = constructorPets[index];
    
    // Populate each form field with the pet's current data
    // This allows the user to see and modify the existing information
    document.getElementById("petName").value = pet.name;
    document.getElementById("petAge").value = pet.age;
    document.getElementById("petBreed").value = pet.breed;
    document.getElementById("petGender").value = pet.gender;
    document.getElementById("petService").value = pet.service;
    document.getElementById("petColor").value = pet.color;
    
    // Remove the old entry from the array
    // When the user clicks "Register", it will create a new entry with updated info
    constructorPets.splice(index, 1);
    
    // Refresh all displays to remove the old entry
    updateAllDisplays();
    
    // Smoothly scroll the page to the form so user can see it
    // scrollIntoView() moves the page so the element is visible
    document.getElementById("petRegistrationForm").scrollIntoView({ behavior: 'smooth' });
}

// --------------------------------------------------------
// DISPLAY PET COUNT
// --------------------------------------------------------
// Updates the total number of pets registered
// This function counts all pets in the array and displays the number
function displayPetCount() {
    let petCountElement = document.getElementById("petCount");
    if (petCountElement) {
        petCountElement.textContent = constructorPets.length;
    }
}

// --------------------------------------------------------
// DISPLAY INITIAL PETS LIST
// --------------------------------------------------------
// Shows the names of the first 3 pets (the initial pets created)
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

// --------------------------------------------------------
// UPDATE ALL DISPLAYS
// --------------------------------------------------------
// Helper function that updates the table, count, and initial pets list
function updateAllDisplays() {
    displayPetTable();
    displayPetCount();
    displayInitialPets();
}

// --------------------------------------------------------
// INITIALIZE THE PAGE
// --------------------------------------------------------
updateAllDisplays();


// Initialize display when page loads
updateAllDisplays();
