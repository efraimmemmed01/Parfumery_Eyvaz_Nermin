const swiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 1000, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });

  let swiperTest = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: ".test-next",
      prevEl: ".test-prev",
    },
  });


   let bestSellers = new Swiper(".bestSellerSwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: ".best-next",
      prevEl: ".best-prev",
    },
  });

  

let openBtn = document.getElementById('burger-open');
let closeBtn = document.getElementById('burger-close');
let sideNav = document.getElementById('side-nav');

openBtn.addEventListener('click', function() {
    sideNav.classList.remove('translate-x-full');
});
closeBtn.addEventListener('click', function() {
    sideNav.classList.add('translate-x-full');
});

let themeBtn = document.getElementById('theme-icon');

let savedTheme = localStorage.getItem('user-theme');
if (savedTheme === 'orange-mode') {
    orangeMode();
} else {
    blackMode(); 
}

themeBtn.addEventListener('click', function() {
    if (themeBtn.classList.contains('fa-moon')) {
        orangeMode();
        localStorage.setItem('user-theme', 'orange-mode');
    } else {
        blackMode();
        localStorage.setItem('user-theme', 'black-mode');
    }
});

function blackMode() {
    themeBtn.classList.replace('fa-sun', 'fa-moon');
    themeBtn.style.color = "white"; 
    sideNav.style.backgroundColor = "black";
    sideNav.style.color = "white";
}

function orangeMode() {
    themeBtn.classList.replace('fa-moon', 'fa-sun');
    themeBtn.style.color = "black"; 
    sideNav.style.backgroundColor = "#ffbc44"; 
    sideNav.style.color = "black";
}