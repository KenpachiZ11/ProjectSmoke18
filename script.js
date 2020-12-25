let delay_popup = 1000;	setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
let upBtn = document.getElementsByClassName("upBtn");


function placeClick() {
    register=window.open("register.html", "display_ford",
      "min-width=300, min-height=500,status=no,toolbar=,menubar=no");
}