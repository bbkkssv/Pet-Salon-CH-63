// Main JavaScript file for the Pet Salon website. This is only for the index.html page

// Salon object with basic information
let salon = {
    name: "Pet Salon",
    address: "123 Pet Street, Dogtown, CA 90210",
    phone: "(555) 123-PETS",
    email: "info@petsalon.com",
    workingHours: "Mon-Fri: 9AM-6PM, Sat: 9AM-4PM",
    services: ["Grooming", "Nail Trim", "Bath", "Haircut"]
};

// Display salon information on the page
function displaySalonInfo() {
    let salonInfoElement = document.getElementById("salonInfo");
    
    if (salonInfoElement) {
        let salonHTML = `
            <h2>${salon.name}</h2>
            <p><strong>Address:</strong> ${salon.address}</p>
            <p><strong>Phone:</strong> ${salon.phone}</p>
            <p><strong>Email:</strong> ${salon.email}</p>
            <p><strong>Hours:</strong> ${salon.workingHours}</p>
        `;
        salonInfoElement.innerHTML = salonHTML;
    }
}


displaySalonInfo();
