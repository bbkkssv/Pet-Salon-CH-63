// list of pets
let pets = [
    {
        name: "Max",
        age: 3,
        gender: "Male",
        service: "Grooming",
        breed: "Golden Retriever"
    },
    {
        name: "Bella",
        age: 2,
        gender: "Female",
        service: "Nail Trim",
        breed: "Poodle"
    },
    {
        name: "Charlie",
        age: 5,
        gender: "Male",
        service: "Bath",
        breed: "Beagle"
    }
];

// Count how many pets we have
function displayPetCount() {
    let count = pets.length; // Counts the number of pets in array
    document.getElementById("petCount").innerHTML = count; // Displays count        
}

// Display all pet names in a list
function displayPetNames() {
    let petNamesHTML = "";
    
    // Loop through each pet and add their name to the list
    for (let i = 0; i < pets.length; i++) {
        petNamesHTML += `<li class="list-group-item">${pets[i].name}</li>`;
    }
    
    document.getElementById("petNames").innerHTML = petNamesHTML;
}


displayPetCount();
displayPetNames();
