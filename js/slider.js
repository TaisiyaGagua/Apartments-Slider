const next = document.querySelector('.next'); 
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.circle');

const cities = document.querySelectorAll('.city_nav'); 
const image = document.querySelectorAll('.apartment_image');

const city = document.querySelector('#city');
const area = document.querySelector('#area');  
const date  = document.querySelector('#time');  

const cityInfo = [
    {
        city: "Rostov-on-Don\nLCD admiral", 
        area: "81 m2", 
        time: "3.5 months",
    }, 
    {
        city: "Sochi\nThieves",
        area: "105 m2",
        time: "4 months", 
    },
    {
        city: "Rostov-on-Don\nPatriotic",
        area: "93 m2",
        time: "3 months", 
    }
];

let currentIndex = 0; 

function focus(index) {

    for (let i = 0; i < image.length; i++){ 

        image[i].classList.remove('show');
        image[index].classList.add('show');

        dots[i].classList.remove('pressed');
        dots[index].classList.add('pressed');

        cities[i].classList.remove('focus');
        cities[index].classList.add('focus');

        city.innerText = cityInfo[index].city;
        area.innerText = cityInfo[index].area;
        date.innerText = cityInfo[index].time;
    }
}

cities.forEach((item, indexCity) => {
    item.addEventListener('click', () => {
        currentIndex = indexCity;
        focus(currentIndex);
    });
});

next.addEventListener('click', () => {
    if (currentIndex == image.length - 1){
        currentIndex = 0;
        focus(currentIndex);
    } else {
        currentIndex++;
        focus(currentIndex);
    }
});

prev.addEventListener('click', () => {

    if (currentIndex == 0){
        currentIndex = image.length - 1;
        focus(currentIndex);
    } else {
        currentIndex--;
        focus(currentIndex);
    }
});

dots.forEach((item, indexDots) => {
    item.addEventListener('click', () => {
        currentIndex = indexDots;
        focus(currentIndex);
    });
});
