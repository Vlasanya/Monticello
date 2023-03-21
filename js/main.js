function readMore() {
    let dots = document.querySelector('.dots');
    let more = document.querySelector('.more');
    let moreDetails = document.querySelector('.more_details');
     if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreDetails.innerHTML = "MORE DETAILS";
        setTimeout(function() {
            more.style.display = "none";
          }, 500);
     } else {
        dots.style.display = "none";
        moreDetails.innerHTML = "HIDE TEXT";
        setTimeout(function() {
            more.style.display = "inline";
          }, 500);
     }
}
function readMore2() {
    let dots = document.querySelector('.dots-2');
    let more = document.querySelector('.more-2');
    let moreDetails = document.querySelector('.more_details-2');
     if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreDetails.innerHTML = "MORE DETAILS";
        setTimeout(function() {
            more.style.display = "none";
          }, 500);
     } else {
        dots.style.display = "none";
        moreDetails.innerHTML = "HIDE TEXT";
        setTimeout(function() {
            more.style.display = "inline";
          }, 500);
     }
}
function showGallery(imgs) {
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
  
  let images = document.querySelectorAll(".column img");
  let currentIndex = Array.prototype.indexOf.call(images, imgs);
  
  let nextButton = document.querySelector(".nextbtn");
  let prevButton = document.querySelector(".prevbtn");
  
  nextButton.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= images.length) {
  currentIndex = 0;
  }
  expandImg.src = images[currentIndex].src;
  imgText.innerHTML = images[currentIndex].alt;
  });
  
  prevButton.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
  currentIndex = images.length - 1;
  }
  expandImg.src = images[currentIndex].src;
  imgText.innerHTML = images[currentIndex].alt;
  });
}

document.querySelector(".gallery__btn").addEventListener("click", function() {
  let firstImage = document.querySelector(".column img");
  showGallery(firstImage);
});
function burgerMenu() {
  let x = document.getElementById("burger");
  if (x.className === "menu__links") {
    x.className += " responsive";
  } else {
    x.className = "menu__links";
  }
}


window.addEventListener('scroll', function () {
  const links = document.querySelectorAll('.menu__link');

  links.forEach(function (link) {
    const section = document.querySelector(link.hash);

    if (section.offsetTop <= window.scrollY && section.offsetTop + section.offsetHeight > window.scrollY) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

document.querySelectorAll('.menu__link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const section = document.querySelector(this.hash);

        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
    });
});