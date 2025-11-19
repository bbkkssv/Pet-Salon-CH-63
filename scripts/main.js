// ========================================================
// MAIN JAVASCRIPT FILE FOR PET SALON WEBSITE
// ========================================================
// This file handles the salon information display on the About Us page (index.html)
// It contains the salon business details and a function to display them

// --------------------------------------------------------
// SALON OBJECT LITERAL
// --------------------------------------------------------
// An object literal is a way to store related data in one place
// This object holds all the basic information about our pet salon business
let salon = {
    name: "Pet Salon",                                      // Business name
    address: "123 Pet Street, Dogtown, CA 90210",          // Physical location
    phone: "(555) 123-PETS",                               // Contact phone number
    email: "info@petsalon.com",                            // Contact email
    workingHours: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",       // Operating hours
    services: ["Grooming", "Nail Trim", "Bath", "Haircut"] // Array of services offered
};

// --------------------------------------------------------
// DISPLAY SALON INFORMATION FUNCTION
// --------------------------------------------------------
// This function finds the HTML element with id="salonInfo" and populates it
// with the salon's business information from the salon object above
function displaySalonInfo() {
    // Get the HTML element where we want to display the salon info
    let salonInfoElement = document.getElementById("salonInfo");
    
    // Check if the element exists on the page (defensive programming)
    if (salonInfoElement) {
        // Create HTML string using template literals (backticks allow ${} for variables)
        // This HTML will be injected into the salonInfo element
        let salonHTML = `
            <h2>${salon.name}</h2>
            <p><strong>Address:</strong> ${salon.address}</p>
            <p><strong>Phone:</strong> ${salon.phone}</p>
            <p><strong>Email:</strong> ${salon.email}</p>
            <p><strong>Hours:</strong> ${salon.workingHours}</p>
        `;
        
        // Set the innerHTML property to insert our HTML into the element
        salonInfoElement.innerHTML = salonHTML;
    }
}

// --------------------------------------------------------
// INITIALIZE THE PAGE
// --------------------------------------------------------
// Call the displaySalonInfo function immediately when this script loads
// This ensures the salon information appears as soon as the page loads
displaySalonInfo();

