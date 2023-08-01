function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.classList.add("invalid");
      return false;
    }
    
    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
      emailInput.classList.add("invalid");
      return false;
    }
    
    // Optionally, you can add more validation for other fields
    
    return true; // Allow form submission if all validations pass
  }
  
  // Add event listeners to clear initial values on input focus
  var formInputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
  formInputs.forEach(function(input) {
    input.addEventListener("focus", function() {
      this.value = "";
      this.classList.remove("invalid");
    });
  });
  