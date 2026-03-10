/* LOGIN MESSAGE */
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

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
