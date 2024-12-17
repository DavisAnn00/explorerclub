// script.js

function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    if (drawer.style.width === '180px') {
      drawer.style.width = '0';
    } else {
      drawer.style.width = '180px';
    }
    
  }
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting normally
  
    // Validate fields (you can add more validation as needed)
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value;
  
    if (firstName && lastName && email && password && mobile) {
      // Here you can send the data to the backend via AJAX or fetch API if needed
      document.getElementById("confirmationMessage").style.display = "block"; // Show confirmation message
    } else {
      alert("Please fill out all fields correctly.");
    }
  });
 