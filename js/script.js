
const carOnFire = "./assets/caronfire_2.png";

let regCopCar = 
document.getElementById('caronfire');
 regCopCar.onclick = () =>{regCopCar.src = carOnFire;
 }
 // yes, this code is from w3schools
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll("li.modal-button");

var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}


// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
//$('#resourcePadBasic').pad({'padId':'test'});


