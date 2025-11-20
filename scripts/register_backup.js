function Pet(name, age, gender, breed, service, type, color) {function Pet(name, age, gender, breed, service, type, color) {// ========================================================

    this.name = name;

    this.age = age;    this.name = name;// PET REGISTRATION JAVASCRIPT

    this.gender = gender;

    this.breed = breed;    this.age = age;// ========================================================

    this.service = service;

    this.type = type;    this.gender = gender;// This file handles all pet registration functionality for registration.html

    this.color = color;

}    this.breed = breed;// It includes: Pet constructor, pet creation, form handling, table display,



let pet1 = new Pet("Fluffy", 4, "Female", "Persian Cat", "Grooming", "Cat", "White");    this.service = service;// and edit/delete operations

let pet2 = new Pet("Buddy", 2, "Male", "Labrador", "Bath", "Dog", "Golden");

let pet3 = new Pet("Whiskers", 1, "Male", "Maine Coon", "Nail Trim", "Cat", "Gray");    this.type = type;



let constructorPets = [pet1, pet2, pet3];    this.color = color;// --------------------------------------------------------



function displayRow(pet, index) {}// PET CONSTRUCTOR FUNCTION

    let row = `

        <tr>// --------------------------------------------------------

            <td>${pet.name}</td>

            <td>${pet.age}</td>let pet1 = new Pet("Fluffy", 4, "Female", "Persian Cat", "Grooming", "Cat", "White");// A constructor is a special function used to create objects with the same structure

            <td>${pet.breed}</td>

            <td>${pet.gender}</td>let pet2 = new Pet("Buddy", 2, "Male", "Labrador", "Bath", "Dog", "Golden");// The "this" keyword refers to the new object being created

            <td>${pet.service}</td>

            <td>${pet.color}</td>let pet3 = new Pet("Whiskers", 1, "Male", "Maine Coon", "Nail Trim", "Cat", "Gray");// When we call "new Pet(...)", JavaScript creates a new empty object and runs this function

            <td>${pet.type}</td>

            <td>function Pet(name, age, gender, breed, service, type, color) {

                <button class="btn btn-sm btn-warning me-2" onclick="editPet(${index})">

                    <i class="bi bi-pencil-fill"></i> Editlet constructorPets = [pet1, pet2, pet3];    this.name = name;        // Pet's name (e.g., "Fluffy")

                </button>

                <button class="btn btn-sm btn-danger" onclick="deletePet(${index})">    this.age = age;          // Pet's age in years (e.g., 4)

                    <i class="bi bi-trash-fill"></i> Delete

                </button>function displayRow(pet, index) {    this.gender = gender;    // Pet's gender ("Male" or "Female")

            </td>

        </tr>    let row = `    this.breed = breed;      // Pet's breed (e.g., "Persian Cat")

    `;

    return row;        <tr>    this.service = service;  // Service needed (e.g., "Grooming")

}

            <td>${pet.name}</td>    this.type = type;        // Pet type ("Cat" or "Dog")

function displayPetTable() {

    let tableHTML = "";            <td>${pet.age}</td>    this.color = color;      // Pet's color (e.g., "White")

    

    for (let i = 0; i < constructorPets.length; i++) {            <td>${pet.breed}</td>}

        tableHTML += displayRow(constructorPets[i], i);

    }            <td>${pet.gender}</td>

    

    let tableBody = document.getElementById("petTableBody");            <td>${pet.service}</td>// --------------------------------------------------------

    

    if (tableBody) {            <td>${pet.color}</td>// CREATE INITIAL PETS

        tableBody.innerHTML = tableHTML;

    }            <td>${pet.type}</td>// --------------------------------------------------------

}

            <td>// Using the "new" keyword with the Pet constructor to create pet objects

function registerPet(event) {

    event.preventDefault();                <button class="btn btn-sm btn-warning me-2" onclick="editPet(${index})">// Each pet is stored in a variable

    

    let name = document.getElementById("petName").value;                    <i class="bi bi-pencil-fill"></i> Editlet pet1 = new Pet("Fluffy", 4, "Female", "Persian Cat", "Grooming", "Cat", "White");

    let age = document.getElementById("petAge").value;

    let breed = document.getElementById("petBreed").value;                </button>let pet2 = new Pet("Buddy", 2, "Male", "Labrador", "Bath", "Dog", "Golden");

    let gender = document.getElementById("petGender").value;

    let service = document.getElementById("petService").value;                <button class="btn btn-sm btn-danger" onclick="deletePet(${index})">let pet3 = new Pet("Whiskers", 1, "Male", "Maine Coon", "Nail Trim", "Cat", "Gray");

    let color = document.getElementById("petColor").value;

                        <i class="bi bi-trash-fill"></i> Delete

    let type = "";

    if (breed.includes("Cat") || breed === "Persian Cat" || breed === "Maine Coon" || breed === "Siamese") {                </button>// --------------------------------------------------------

        type = "Cat";

    } else {            </td>// PETS ARRAY

        type = "Dog";

    }        </tr>// --------------------------------------------------------

    

    let newPet = new Pet(name, age, gender, breed, service, type, color);    `;// An array to store all pet objects

    constructorPets.push(newPet);

        return row;// Arrays use square brackets [] and can hold multiple items

    updateAllDisplays();

    document.getElementById("petRegistrationForm").reset();}// We start with our 3 initial pets, and new registrations will be added here

}

let constructorPets = [pet1, pet2, pet3];

function deletePet(index) {

    if (confirm(`Are you sure you want to delete ${constructorPets[index].name}?`)) {function displayPetTable() {

        constructorPets.splice(index, 1);

        updateAllDisplays();    let tableHTML = "";// --------------------------------------------------------

    }

}    // DISPLAY SINGLE PET AS TABLE ROW



function editPet(index) {    for (let i = 0; i < constructorPets.length; i++) {// --------------------------------------------------------

    let pet = constructorPets[index];

            tableHTML += displayRow(constructorPets[i], i);// This function takes a pet object and its index (position in array)

    document.getElementById("petName").value = pet.name;

    document.getElementById("petAge").value = pet.age;    }// and returns HTML for one table row with all pet information and action buttons

    document.getElementById("petBreed").value = pet.breed;

    document.getElementById("petGender").value = pet.gender;    function displayRow(pet, index) {

    document.getElementById("petService").value = pet.service;

    document.getElementById("petColor").value = pet.color;    let tableBody = document.getElementById("petTableBody");    // Template literal (backticks) allows us to create multi-line HTML

    

    constructorPets.splice(index, 1);        // ${} syntax inserts JavaScript values into the string

    updateAllDisplays();

        if (tableBody) {    let row = `

    document.getElementById("petRegistrationForm").scrollIntoView({ behavior: 'smooth' });

}        tableBody.innerHTML = tableHTML;        <tr>



function displayPetCount() {    }            <td>${pet.name}</td>

    let petCountElement = document.getElementById("petCount");

    if (petCountElement) {}            <td>${pet.age}</td>

        petCountElement.textContent = constructorPets.length;

    }            <td>${pet.breed}</td>

}

function registerPet(event) {            <td>${pet.gender}</td>

function displayInitialPets() {

    let petListElement = document.getElementById("petList");    event.preventDefault();            <td>${pet.service}</td>

    if (petListElement) {

        let listHTML = "";                <td>${pet.color}</td>

        for (let i = 0; i < 3 && i < constructorPets.length; i++) {

            listHTML += `    let name = document.getElementById("petName").value;            <td>${pet.type}</td>

                <li class="list-group-item">

                    <strong>${constructorPets[i].name}</strong>     let age = document.getElementById("petAge").value;            <td>

                    <span class="text-muted">(${constructorPets[i].type})</span>

                </li>    let breed = document.getElementById("petBreed").value;                <!-- Edit button: onclick calls editPet function with the pet's index -->

            `;

        }    let gender = document.getElementById("petGender").value;                <button class="btn btn-sm btn-warning me-2" onclick="editPet(${index})">

        petListElement.innerHTML = listHTML;

    }    let service = document.getElementById("petService").value;                    <i class="bi bi-pencil-fill"></i> Edit

}

    let color = document.getElementById("petColor").value;                </button>

function updateAllDisplays() {

    displayPetTable();                    <!-- Delete button: onclick calls deletePet function with the pet's index -->

    displayPetCount();

    displayInitialPets();    let type = "";                <button class="btn btn-sm btn-danger" onclick="deletePet(${index})">

}

    if (breed.includes("Cat") || breed === "Persian Cat" || breed === "Maine Coon" || breed === "Siamese") {                    <i class="bi bi-trash-fill"></i> Delete

updateAllDisplays();

        type = "Cat";                </button>

    } else {            </td>

        type = "Dog";        </tr>

    }    `;

        return row; // Return the HTML string

    let newPet = new Pet(name, age, gender, breed, service, type, color);}

    constructorPets.push(newPet);

    // --------------------------------------------------------

    updateAllDisplays();// DISPLAY ALL PETS IN TABLE

    document.getElementById("petRegistrationForm").reset();// --------------------------------------------------------

}// This function loops through all pets in the array and displays them in the table

function displayPetTable() {

function deletePet(index) {    let tableHTML = ""; // Start with empty string

    if (confirm(`Are you sure you want to delete ${constructorPets[index].name}?`)) {    

        constructorPets.splice(index, 1);    // For loop: starts at 0, continues while i < array length, increments by 1 each time

        updateAllDisplays();    // This visits each pet in the constructorPets array

    }    for (let i = 0; i < constructorPets.length; i++) {

}        // Add each pet's row HTML to our tableHTML string

        // We pass the pet object and its index (i) to displayRow

function editPet(index) {        tableHTML += displayRow(constructorPets[i], i);

    let pet = constructorPets[index];    }

        

    document.getElementById("petName").value = pet.name;    // Find the table body element in the HTML

    document.getElementById("petAge").value = pet.age;    let tableBody = document.getElementById("petTableBody");

    document.getElementById("petBreed").value = pet.breed;    

    document.getElementById("petGender").value = pet.gender;    // If the element exists, set its innerHTML to our generated HTML

    document.getElementById("petService").value = pet.service;    if (tableBody) {

    document.getElementById("petColor").value = pet.color;        tableBody.innerHTML = tableHTML;

        }

    constructorPets.splice(index, 1);}

    updateAllDisplays();

    // --------------------------------------------------------

    document.getElementById("petRegistrationForm").scrollIntoView({ behavior: 'smooth' });// REGISTER NEW PET FROM FORM

}// --------------------------------------------------------

// This function is called when the user clicks the "Register" button

function displayPetCount() {// It collects form data, creates a new Pet object, and adds it to the array

    let petCountElement = document.getElementById("petCount");function registerPet(event) {

    if (petCountElement) {    // Prevent the form from submitting and refreshing the page

        petCountElement.textContent = constructorPets.length;    event.preventDefault();

    }    

}    // Get values from each form input using their IDs

    // .value gets the text the user typed into each input field

function displayInitialPets() {    let name = document.getElementById("petName").value;

    let petListElement = document.getElementById("petList");    let age = document.getElementById("petAge").value;

    if (petListElement) {    let breed = document.getElementById("petBreed").value;

        let listHTML = "";    let gender = document.getElementById("petGender").value;

        for (let i = 0; i < 3 && i < constructorPets.length; i++) {    let service = document.getElementById("petService").value;

            listHTML += `    let color = document.getElementById("petColor").value;

                <li class="list-group-item">    

                    <strong>${constructorPets[i].name}</strong>     // Automatically determine if pet is a cat or dog based on breed name

                    <span class="text-muted">(${constructorPets[i].type})</span>    let type = "";

                </li>    // .includes() checks if the breed contains "Cat", or matches specific cat breeds

            `;    if (breed.includes("Cat") || breed === "Persian Cat" || breed === "Maine Coon" || breed === "Siamese") {

        }        type = "Cat";

        petListElement.innerHTML = listHTML;    } else {

    }        type = "Dog"; // If not a cat, assume it's a dog

}    }

    

function updateAllDisplays() {    // Create a new Pet object using the constructor with all the form values

    displayPetTable();    let newPet = new Pet(name, age, gender, breed, service, type, color);

    displayPetCount();    

    displayInitialPets();    // Add the new pet to the end of the constructorPets array

}    // .push() is an array method that adds an item to the end

    constructorPets.push(newPet);

updateAllDisplays();    

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
