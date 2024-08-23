let menubtn = document.getElementById("logo");
let sideNav = document.getElementById("ele");

menubtn.onclick = function () {
    if (window.innerWidth <= 768) {
        if (sideNav.style.top === "-350px" || sideNav.style.top === "") {
            sideNav.style.top = "85px";
        } else {
            sideNav.style.top = "-350px";
        }
    }
};

document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let songSlideIndex = 1;
showSongsSlides(songSlideIndex);

function plusSongsSlides(n) {
    showSongsSlides(songSlideIndex += n);
}

function currentSongsSlide(n) {
    showSongsSlides(songSlideIndex = n);
}

function showSongsSlides(n) {
    let slides = document.getElementsByClassName("songs-slide");
    if (n > slides.length) { songSlideIndex = 1; }
    if (n < 1) { songSlideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[songSlideIndex - 1].style.display = "flex";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}


let artistSlideIndex = 1;
showArtistSlides(artistSlideIndex);
function plusArtistSlides(n) {
    showArtistSlides(artistSlideIndex += n);
}
function showArtistSlides(n) {
    let slides = document.getElementsByClassName("artists-slide");
    if (n > slides.length) { artistSlideIndex = 1; }
    if (n < 1) { artistSlideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[artistSlideIndex - 1].style.display = "flex";  
}
setInterval(function() {
    plusArtistSlides(1);
}, 5000);
