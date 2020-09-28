const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
//nav bar
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const links = document.querySelectorAll('a');
links.forEach((value, i) => (value.textContent = Object.values(siteContent.nav)[i]));
links.forEach((value) => (value.style.color = 'green'));

//new items on nav
let addNav = document.querySelector('nav');

let blogButtn = document.createElement('a');
blogButtn.textContent = 'Blog';
blogButtn.href = '#';
blogButtn.style.color = 'green';
addNav.appendChild(blogButtn);

let homeButtn = document.createElement('a');
homeButtn.textContent = 'Home';
homeButtn.href = '#';
homeButtn.style.color = 'green';
addNav.prepend(homeButtn);

//cta
let domT = document.querySelectorAll('h1');
domT[0].innerHTML = siteContent.cta.h1;

let cPic = document.querySelector('#cta-img');
cPic.src = siteContent.cta['img-src'];

let cButt = document.querySelectorAll('button');
cButt[0].innerHTML = siteContent.cta['button'];

//Main content
//Main H4
let h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent["main-content"]['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

//Mid Picture
let mPic = document.querySelector('#middle-img');
mPic.src = siteContent['main-content']['middle-img-src']

//Main P
let para = document.querySelectorAll('p')
para[0].textContent = siteContent['main-content']['features-content'];
para[1].textContent = siteContent['main-content']['about-content'];
para[2].textContent = siteContent['main-content']['services-content'];
para[3].textContent = siteContent['main-content']['product-content'];
para[4].textContent = siteContent['main-content']['vision-content'];

//footer
h4[5].textContent = siteContent['contact']['contact-h4'];
para[5].textContent = siteContent['contact']['address'];
para[6].textContent = siteContent['contact']['phone'];
para[7].textContent = siteContent['contact']['email'];
para[8].textContent = siteContent['footer']['copyright'];