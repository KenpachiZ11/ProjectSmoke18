let cards = document.getElementsByClassName("card");
let cross = document.querySelector(".cross");
let previous = document.querySelector(".arrowP");
let next = document.querySelector(".arrowN");
let box = document.getElementsByClassName("box")[0];

cards = Array.from(cards);

cards.forEach(function (val, i) {
    val.addEventListener("click", function() {
        box.parentElement.style.display = "flex";
        let img = document.createElement("img");
        img.src = this.firstElementChild.src;
        img.alt = this.firstElementChild.alt;
        img.className = "lightboxImage";
        // box.innerHTML = img.outerHTML;
        box.appendChild(img);
    });
});

cross.addEventListener("click", function() {
    this.parentElement.style.display = "none";
    box.innerHTML = ""; // box.innerHTML = img.outerHTML;
});

next.addEventListener("click", function() {
    let src = box.firstElementChild.src;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].firstElementChild.src === src) {
            if (i === cards.length - 1) {
                box.firstElementChild.src = cards[0].firstElementChild.src;
                break;
            } else {
                box.firstElementChild.src = cards[i+1].firstElementChild.src;
                break;
            }
        }
    }
});

previous.addEventListener("click", function() {
    let src = box.firstElementChild.src;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].firstElementChild.src === src) {
            if (i === 0) {
                box.firstElementChild.src = cards[cards.length - 1].firstElementChild.src;
                break;
            } else {
                box.firstElementChild.src = cards[i-1].firstElementChild.src;
                break;
            }
        }
    }
});