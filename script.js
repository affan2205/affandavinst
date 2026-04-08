/* LOGIN */
const form = document.querySelector("form");

if(form){
form.addEventListener("submit", function(e){
e.preventDefault();
alert("Login berhasil!");
});
}

/* SEARCH */
function searchBook(){
let input = document.getElementById("searchInput").value.toLowerCase();
let books = document.querySelectorAll("#bookList li");

books.forEach(book=>{
let text = book.textContent.toLowerCase();
book.style.display = text.includes(input) ? "" : "none";
});
}

/* SCROLL NAV */
window.addEventListener("scroll", function(){
let nav = document.querySelector("nav");
nav.style.background = window.scrollY > 50 ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.6)";
});

/* ANIMASI */
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){
let trigger = window.innerHeight * 0.8;

sections.forEach(sec=>{
let top = sec.getBoundingClientRect().top;
if(top < trigger){
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}
});
});

/* COUNTDOWN */
const countdown = document.getElementById("countdown");

if(countdown){
const eventDate = new Date("July 20, 2026 16:30:00").getTime();

setInterval(()=>{
let now = new Date().getTime();
let dist = eventDate - now;

let d = Math.floor(dist/(1000*60*60*24));
let h = Math.floor((dist%(1000*60*60*24))/(1000*60*60));
let m = Math.floor((dist%(1000*60*60))/(1000*60));

countdown.innerHTML = `Dimulai dalam ${d} hari ${h} jam ${m} menit`;

},1000);
}

    });

});
