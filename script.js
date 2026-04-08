/* LOGIN MESSAGE */
const form = document.querySelector("form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Login berhasil! Selamat datang di Poda Na Kima Library");
    });
}
    alert("Login berhasil! Selamat datang di Poda Na Lima Library");
});


/* NAVBAR EFFECT SAAT SCROLL */
window.addEventListener("scroll", function(){

    let navbar = document.querySelector("nav");

    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.9)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.6)";
    }

});
function searchBook() {

let input = document.getElementById("searchInput").value.toLowerCase();
let books = document.querySelectorAll("#bookList li");

books.forEach(function(book){

let text = book.textContent.toLowerCase();

if(text.includes(input)){
book.style.display = "";
}else{
book.style.display = "none";
}

});

}


/* ANIMASI SAAT SCROLL */
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){

    let trigger = window.innerHeight * 0.8;

    sections.forEach(section => {

        let top = section.getBoundingClientRect().top;

        if(top < trigger){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});
/* COUNTDOWN EVENT */
const countdownEl = document.getElementById("countdown");

if(countdownEl){

    const eventDate = new Date("July 20, 2026 16:30:00").getTime();

    const timer = setInterval(function(){

        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000*60*60*24));
        const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

        countdownEl.innerHTML =
        "Dimulai dalam: " + days + " hari " + hours + " jam " + minutes + " menit";

        if(distance < 0){
            clearInterval(timer);
            countdownEl.innerHTML = "Event telah dimulai!";
        }

    }, 1000);
}

    });

});
