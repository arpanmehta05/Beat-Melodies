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

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

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
    let dots = document.getElementsByClassName("dot-song");
    if (n > slides.length) { songSlideIndex = 1; }
    if (n < 1) { songSlideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[songSlideIndex - 1].style.display = "flex";
    dots[songSlideIndex - 1].className += " active";
}

// let artistSlideIndex = 1;
// showArtistsSlides(artistSlideIndex);

// function plusArtistsSlides(n) {
//   showArtistsSlides(artistSlideIndex += n);
// }

// function currentArtistsSlide(n) {
//   showArtistsSlides(artistSlideIndex = n);
// }

// function showArtistsSlides(n) {
//   let slides = document.getElementsByClassName("artists-slide");
//   let dots = document.getElementsByClassName("dot-artist");
//   if (n > slides.length) { artistSlideIndex = 1 }
//   if (n < 1) { artistSlideIndex = slides.length }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[artistSlideIndex - 1].style.display = "flex";
//   dots[artistSlideIndex - 1].className += " active";
// }