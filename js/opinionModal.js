// Get the modal
var modal = document.getElementById("opinionLab");

// Close modal when click close button
var opinionClose = document.getElementsByClassName("opinion__close")[0];
opinionClose.onclick = function() {
    modal.style.display = "none";
  }

//   open Opinion Modal
var opinionOpen = document.getElementsByClassName("opinion__open");
for(var i = 0; i < opinionOpen.length; i++) {
    opinionOpen[i].addEventListener("click", function(){    
        modal.style.display = "block";
    })
}

var opinionLink = document.querySelectorAll(".opinion__body ul li a");
for(var i = 0; i < opinionLink.length; i++) {
    opinionLink[i].addEventListener("click", function(){    
        modal.style.display = "none";
    })
}