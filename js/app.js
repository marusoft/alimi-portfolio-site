const hambugerContain = document.querySelector('#hambuger-contain');
const navList = document.querySelector('.nav-list');
const presentYear = document.getElementById('getYear');

const today = new Date();
const year = today.getFullYear();
presentYear.innerHTML = `&copy; ${year} Marusoft`


const toggleBar = () => {
  hambugerContain.classList.toggle('toggler');
  navList.classList.toggle('toggler');
};

hambugerContain.addEventListener('click', toggleBar);
navList.addEventListener('click', toggleBar);


