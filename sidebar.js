// Function to load the sidebar into any page
function loadSidebar() {
   fetch('sidebar.html') // Load the sidebar from the external HTML file
       .then(response => response.text())
       .then(data => {
           document.body.insertAdjacentHTML('afterbegin', data); // Insert the sidebar at the beginning of the body
           addDropdownFunctionality(); // Add dropdown functionality after sidebar is loaded
       })
       .catch(error => console.error('Error loading sidebar:', error));
}

// Function to handle dropdown functionality
function addDropdownFunctionality() {
   const dropdownButtons = document.querySelectorAll('.dropbtn');
   
   dropdownButtons.forEach(button => {
       button.addEventListener('click', function (event) {
           event.preventDefault(); // Prevent default link behavior
           const dropdown = this.nextElementSibling; // Get the dropdown content next to the button
           const arrow = this.querySelector('.arrow'); // Get the arrow within the button
           
           // Toggle the active state for dropdown and rotate arrow
           dropdown.classList.toggle('active');
           arrow.classList.toggle('rotate');
       });
   });
}

// Load the sidebar when the page loads
document.addEventListener('DOMContentLoaded', loadSidebar);
