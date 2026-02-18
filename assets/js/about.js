
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');


sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
});


overlay.addEventListener('click', function() {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
});



function applyLightMode() {
    document.body.classList.remove('bg-gray-900', 'text-white');
    document.body.classList.add('bg-white', 'text-gray-900');

    sidebar.classList.remove('bg-gray-900');
    sidebar.classList.add('bg-white');

    lightMode.classList.remove('text-gray-400');
    lightMode.classList.add('text-gray-800');

    darkMode.classList.remove('text-gray-800');
    darkMode.classList.add('text-gray-400');

    const menuLinks = sidebar.querySelectorAll('nav a');
    menuLinks.forEach(link => {
        link.classList.remove('text-gray-300', 'hover:text-white');
        link.classList.add('text-gray-700', 'hover:text-gray-900');
    });

    const userName = sidebar.querySelector('.absolute span');
    if (userName) {
        userName.classList.remove('text-gray-300');
        userName.classList.add('text-gray-800');
    }

    const borders = sidebar.querySelectorAll('.border-gray-700');
    borders.forEach(border => {
        border.classList.remove('border-gray-700');
        border.classList.add('border-gray-200');
    });

    localStorage.setItem('theme', 'light');
}

function applyDarkMode() {
    document.body.classList.remove('bg-white', 'text-gray-900');
    document.body.classList.add('bg-gray-900', 'text-white');

    sidebar.classList.remove('bg-white');
    sidebar.classList.add('bg-gray-900');

    darkMode.classList.remove('text-gray-400');
    darkMode.classList.add('text-gray-800');

    lightMode.classList.remove('text-gray-800');
    lightMode.classList.add('text-gray-400');

    const menuLinks = sidebar.querySelectorAll('nav a');
    menuLinks.forEach(link => {
        link.classList.remove('text-gray-700', 'hover:text-gray-900');
        link.classList.add('text-gray-300', 'hover:text-white');
    });

    const userName = sidebar.querySelector('.absolute span');
    if (userName) {
        userName.classList.remove('text-gray-800');
        userName.classList.add('text-gray-300');
    }

    const borders = sidebar.querySelectorAll('.border-gray-200');
    borders.forEach(border => {
        border.classList.remove('border-gray-200');
        border.classList.add('border-gray-700');
    });

    localStorage.setItem('theme', 'dark');
}

lightMode.addEventListener('click', applyLightMode);
darkMode.addEventListener('click', applyDarkMode);



let icon = document.querySelector("#mood");
let body = document.querySelector("body");

function applyMoodDark() {
    body.classList.add("dark", "bg-gray-900");
    body.classList.remove("bg-amber-50");
    icon.classList.remove("text-stone-400");
    icon.classList.add("text-white");
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a").forEach(x => {
        x.classList.add("text-white");
    });
    localStorage.setItem('moodTheme', 'dark');
}

function applyMoodLight() {
    body.classList.remove("dark", "bg-gray-900");
    body.classList.add("bg-amber-50");
    icon.classList.remove("text-white");
    icon.classList.add("text-stone-400");
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a").forEach(x => {
        x.classList.remove("text-white");
    });
    localStorage.setItem('moodTheme', 'light');
}

icon.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        applyMoodLight();
    } else {
        applyMoodDark();
    }
});



document.addEventListener('DOMContentLoaded', function () {
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyDarkMode();
    } else if (savedTheme === 'light') {
        applyLightMode();
    }

    const savedMoodTheme = localStorage.getItem('moodTheme');
    if (savedMoodTheme === 'dark') {
        applyMoodDark();
    } else if (savedMoodTheme === 'light') {
        applyMoodLight();
    }
});


document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    }
});


let number1 = 0;
setInterval(() => {
    if (number1 < 370) {
        number1++;
        document.getElementById("num1").textContent = number1;
    }
}, 20);

let number2 = 0;
setInterval(() => {
    if (number2 < 7) {
        number2++;
        document.getElementById("num2").textContent = number2;
    }
}, 600);

let number3 = 0;
setInterval(() => {
    if (number3 < 25) {
        number3++;
        document.getElementById("num3").textContent = number3;
    }
}, 300);


const cardss = [
    {
        id: 1,
        title: "Parfumes",
        description: "Bu etiri ehdiden aldim",
        image: "https://images.pexels.com/photos/14402573/pexels-photo-14402573.jpeg",
        containerimage: "https://images.pexels.com/photos/12562775/pexels-photo-12562775.jpeg",
    },
    {
        id: 2,
        title: "Parfumes2",
        description: "bunuda elvinden",
        image: "https://images.pexels.com/photos/32291049/pexels-photo-32291049.jpeg",
        containerimage: "https://images.pexels.com/photos/8450214/pexels-photo-8450214.jpeg",
    },
    {
        id: 3,
        title: "Etir",
        description: "bunuda Eyvazdan",
        image: "https://images.pexels.com/photos/1895015/pexels-photo-1895015.jpeg",
        containerimage: "https://images.pexels.com/photos/18176579/pexels-photo-18176579.jpeg",
    },
    {
        id: 4,
        title: "Etir",
        description: "bunuda Eyvazdan",
        image: "https://images.pexels.com/photos/7247803/pexels-photo-7247803.jpeg",
        containerimage: "https://images.pexels.com/photos/8450466/pexels-photo-8450466.jpeg",
    },
    {
        id: 5,
        title: "Etir",
        description: "bunuda Eyvazdan",
        image: "https://images.pexels.com/photos/1645017/pexels-photo-1645017.jpeg",
        containerimage: "https://images.pexels.com/photos/13647895/pexels-photo-13647895.jpeg",
    },
];

const cardsEl   = document.querySelector("#cards");
const dotsEl    = document.querySelector("#dots");
const nextBtn   = document.querySelector("#right-button");
const prevBtn   = document.querySelector("#left-button");
const container = document.querySelector("#container");

let count = 0;

cardss.forEach((x, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "blur-sm", "opacity-50", "scale-90");
    if (index === count) {
        card.classList.add("active");
        card.classList.remove("blur-sm", "opacity-50", "scale-90");
    }
    card.style.backgroundImage = `url(${x.image})`;
    cardsEl.append(card);
});

cardss.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add(
        "w-2", "h-2", "rounded-full", "transition-all", "duration-300",
        index === count ? "bg-amber-400" : "bg-white/40",
        index === count ? "w-5" : "w-2"
    );
    dot.addEventListener("click", () => goTo(index));
    dotsEl.append(dot);
});

function updateSlider() {
    const allCards = document.querySelectorAll(".card");
    const allDots  = document.querySelectorAll("#dots button");

    allCards.forEach((card, i) => {
        if (i === count) {
            card.classList.add("active");
            card.classList.remove("blur-sm", "opacity-50", "scale-90");
        } else {
            card.classList.remove("active");
            card.classList.add("blur-sm", "opacity-50", "scale-90");
        }
    });

    allDots.forEach((dot, i) => {
        if (i === count) {
            dot.className = "w-5 h-2 rounded-full bg-amber-400 transition-all duration-300";
        } else {
            dot.className = "w-2 h-2 rounded-full bg-white/40 transition-all duration-300";
        }
    });

    container.style.backgroundImage = `url(${cardss[count].containerimage})`;
}

function goTo(index) {
    count = index;
    updateSlider();
}

nextBtn.addEventListener("click", () => {
    count = (count + 1) % cardss.length;
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    count = (count - 1 + cardss.length) % cardss.length;
    updateSlider();
});



const btn = document.getElementById('visaBtn');
btn.addEventListener('dblclick', () => btn.classList.remove('led-active'));


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