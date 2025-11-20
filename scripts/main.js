// Salon object - stores all business information in one place
let salon = {
    name: "Pet Salon",
    address: "123 Pet Street, Dogtown, CA 90210",
    phone: "(555) 123-PETS",
    email: "info@petsalon.com",
    workingHours: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
    services: ["Grooming", "Nail Trim", "Bath", "Haircut"]
};

// Display salon info on the About Us page
function displaySalonInfo() {
    let salonInfoElement = document.getElementById("salonInfo");
    
    if (salonInfoElement) {
        // Create HTML with salon data using template literals
        let salonHTML = `
            <div class="card-body p-5 bg-white">
                <h2 class="fw-bold mb-4 text-success">${salon.name}</h2>
                <p class="mb-3"><strong>Address:</strong> ${salon.address}</p>
                <p class="mb-3"><strong>Phone:</strong> ${salon.phone}</p>
                <p class="mb-3"><strong>Email:</strong> ${salon.email}</p>
                <p class="mb-0"><strong>Hours:</strong> ${salon.workingHours}</p>
            </div>
        `;
        
        // Insert the HTML into the page
        salonInfoElement.innerHTML = salonHTML;
    }
}

// Run the function when the page loads
displaySalonInfo();
