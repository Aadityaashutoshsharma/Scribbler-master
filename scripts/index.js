var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

btn.popUp = () => {
    modal.style.display = "block";
}

span.newPopUp = () => {
    modal.style.display = "none";
}

