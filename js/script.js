// Get the current date and time
let currentDateTime = new Date();       // Create a new Date object representing the current date and time
let hour = currentDateTime.getHours();  // Extract the current hour (0–23)

// Select the greeting element in the HTML
let message = document.getElementById("greeting"); // Get the paragraph element with id="greeting"

// Determine greeting based on the hour
if(hour >= 5 && hour <= 11){
    // Morning: 5 AM to 11 AM
    message.innerText = "Good morning!";
}
else if(hour > 11 && hour <= 17){
    // Afternoon: 12 PM to 5 PM
    message.innerText = "Good afternoon!";
}
else if(hour > 17 && hour <= 21){
    // Evening: 6 PM to 9 PM
    message.innerText = "Good evening!";
}
else{
    // Night: 10 PM to 4 AM
    message.innerText = "Good night!";
}

const searchInput = document.getElementById('searchInput');  // Search input field
const projectsContainer = document.getElementById('projects');  // Container holding all projects
const projectCards = projectsContainer.querySelectorAll('div[id^="project-"]');  // All project divs
const noResultsMessage = document.getElementById('noResultsMessage');  // "No projects found" message

searchInput.addEventListener('input', () => {

    const query = searchInput.value.toLowerCase();  // Convert search query to lowercase
    let anyVisible = false;  // Track if any project matches

    projectCards.forEach(project => {
        const title = project.querySelector('h3').innerText.toLowerCase();
        const description = project.querySelector('p').innerText.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            project.style.display = 'block';  // Show matching project
            anyVisible = true;
        } else {
            project.style.display = 'none';  // Hide non-matching project
        }
    });

    // Toggle "No projects found" message
    noResultsMessage.style.display = anyVisible ? 'none' : 'block';
});

// Toggle project description visibility when a title is clicked
const projectTitles = document.querySelectorAll('#projects h3');

projectTitles.forEach(title => {
    title.addEventListener('click', () => {
        const description = title.nextElementSibling;
        description.classList.toggle('project-hidden');
    });
});

// Contact form validation and confirmation
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const message = document.getElementById('senderMessage').value.trim();

    // Simple email regex for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate inputs
    if (!name || !email || !message) {
        formFeedback.style.color = 'red';
        formFeedback.innerText = 'Please fill in all fields.';
        formFeedback.style.display = 'block';
        return;
    }

    if (!emailRegex.test(email)) {
        formFeedback.style.color = 'red';
        formFeedback.innerText = 'Please enter a valid email address.';
        formFeedback.style.display = 'block';
        return;
    }

    // Show success message
    formFeedback.style.color = 'green';
    formFeedback.innerText = 'Thank you! Your message has been sent.';
    formFeedback.style.display = 'block';

    // Optionally, clear the form
    contactForm.reset();
});