function myFunction() {
    alert("wellcome to my cv i'm cherif chedi futur ingenieur ,nice to meet you ");
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('section').forEach(function (section) {
        section.addEventListener('click', function () {
            section.style.backgroundColor = 'black';
        });
    });
});

function myFunctionparle() {
  alert("wellcome to my cv i'm cherif chedi futur ingenieur");
}

var imageIndex = 0; 

function changeImage() {
  var imageElement = document.getElementById('profileImage');

  var imagePaths = ["nouvelle_image1.png", "nouvelle_image.png"];
  
  imageIndex = (imageIndex + 1) % imagePaths.length;
    imageElement.src = imagePaths[imageIndex];
}


function showAlert() {

  var emailInput = document.querySelector('.input[name="email"]');
  var userEmail = emailInput.value;


  if (userEmail === "") {
    alert("Veuillez entrer une adresse e-mail.");
  } else {
    alert("Adresse e-mail enregistrée : " + userEmail);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var emailInput = document.querySelector('.input[name="email"]');
  emailInput.addEventListener('blur', showAlert);
});

function showPasswordAlert() {

  var passwordInput = document.querySelector('.input[name="password"]');
  var userPassword = passwordInput.value;


  if (userPassword === "") {
    alert("Veuillez entrer un mot de passe.");
  } else {
    alert("Mot de passe enregistré.");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var passwordInput = document.querySelector('.input[name="password"]');
  passwordInput.addEventListener('blur', showPasswordAlert);
});
