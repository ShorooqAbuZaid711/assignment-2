# Technical Documentation

## Project Overview
**Project Name:** Personal Portfolio Web Application  
**Purpose:** Showcase personal projects, skills, and contact information in a responsive, professional layout with interactive features.

---

## 1. File Structure
   assignment-1/
    ├── README.md
    ├── index.html
    ├── css/
    │ └── styles.css
    ├── js/
    │ └── script.js
    ├── assets/
    │ └── images/
    ├── docs/
    │ ├── ai-usage-report.md
    │ └── technical-documentation.md
    └── .gitignore

---

## 2. HTML Structure
- **Header**: Contains name, tagline, and navigation links (About, Projects, Contact).  
- **About Section**: Short intro paragraph and optional profile image.  
- **Projects Section:**  
    • Each project includes a title, description (paragraph and/or list), and placeholder image.
    • Added a search bar (input id="searchInput") for real-time filtering of projects by title or description.
    • Project titles (<h3>) are clickable to toggle visibility of their details, improving interactivity.
    • Added a "No projects found" message that appears when the search query matches no projects.
- **Contact Section:** orm with fields for Name, Email, and Message.
• Validates that all fields are filled.
• Checks email format using regex.
• Displays success or error messages dynamically.
- **Footer:** Contains email, GitHub link, and copyright.  

---

## 3. CSS Structure
- **Reset / Global Styles:** Applied `margin: 0`, `padding: 0`, `box-sizing: border-box`.  
- **Typography & Layout:** Sans-serif fonts, consistent line-height, centered header text.  
- **Header & Nav:** Background color, flexbox nav layout, hover effects for links.  
- **Sections & Divs:** Background color, padding, margin, border-radius, box-shadow, hover effects.  
- **Form Fields:** Full-width inputs, focus effects, rounded borders.  
- **Footer:** Background color, padding, centered text.  
- **Responsive Design:** Media queries for tablets (max-width: 768px) and mobiles (max-width: 480px).
- **Interactive Styles:**  
    • Used class-based visibility toggling for expanding or hiding project descriptions.  
    • Smooth transition effects for a better user experience.  

---

## 4. JavaScript
- **Greeting Function:** Displays a time-based message (Good morning / afternoon / evening / night).  
- **Search Functionality:**  
    • Captures input from the search bar.  
    • Filters project cards in real time based on title or description text.  
    • Hides non-matching projects and shows a "No projects found" message if none match.
- **Project Toggle Function:**  
    • Each project title (<h3>) is clickable.
    • Clicking toggles visibility of its description or list items.
    • Implemented using DOM traversal and class toggling for visibility control.
- **Contact Form Validation:**
    • Checks that Name, Email, and Message fields are not empty.
    • Validates Email format using regex.
    • Displays dynamic error or success messages.
    • Clears the form on successful submission.
- **Animation:** CSS @keyframes slide-up applied to greeting text for smooth appearance.  

---

## 5. Responsive Design Approach
- Used Flexbox for layout and navigation alignment.  
- Media queries adjust padding, margin, font sizes, and structure for different screen sizes.  
- Tested responsiveness across devices using browser DevTools.  

---

## 6. Key Considerations
- **Accessibility:** Semantic HTML structure, clear focus states for input fields, and good color contrast.  
- **Performance:** Lightweight animations, minimal layout shifts, optimized placeholder images.  
- **Maintainability:**  
    • Clear and consistent naming for IDs and classes.
    • Modular structure separating HTML, CSS, and JS for easy future updates.
    • Clean, commented code for readability and scalability.
- **User Experience:** 
    • Search bar improves browsing through projects.
    • Clickable project titles enhance interactivity.
    • Dynamic feedback messages guide the user.

---

## 7. Known Limitations
    - Contact form does not submit to a backend; it only validates and displays messages.
    - Placeholder images used instead of real project screenshots.
    - Greeting animation and toggle transitions are basic; could be enhanced with smoother effects.
    - Search and toggle features work separately; integration could be improved in future iterations.
    - No persistent storage or API integration for project data; all content is static.

---
