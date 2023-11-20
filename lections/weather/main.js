const api = {
    base: 'https://api.openweathermap.org/data/2.5/',
    key: '46aa9a140ac7376f3f6737f476fc50f1'
}

const dateBuilder = (d) => {
    //d = new Date()
     const months = [
         'January',
         'February',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December',
     ];
     const days = [
         'Sunday',
         'Monday',
         'Tuesday',
         'Wednesday',
         'Thursday',
         'Friday',
         'Saturday'
     ];

     const day = days[d.getDay()];
     const date = d.getDate();
     const month = months[d.getMonth()];
     const year = d.getFullYear();

     return `${day} ${date} ${month} ${year}`;
}

const input = document.querySelector('.searchbar');
const container = document.querySelector('.location-container');

let store = {};
let city = localStorage.getItem('city') || 'Ekaterinburg';
input.addEventListener('keyup', (e) => {

    const value = e.target.value;
    if (e.key === 'Enter' && value) {
        city = value;
        localStorage.setItem('city', city);
        fetchData();
        e.target.value = '';
    }
});

// //деструктуризация
// const a = {b: 2, c: 3, d: 4, e: {f: 5}};
// //создание переменных из полей a
// const {b: b2, c} = a; //b: b2 -  возьми переменную и переименнуй
// //теперь b и c отдельные переменные
// const store = {
//     b: b2,
//     c
// };
// const {d, ...response} = a; // выдираем d, а все остальные поля запиши в response
// //получение f из a
// const {e: {f}} = a;

const fetchData = async () => {
    getLoader();
    const response = await fetch(`${api.base}weather?q=${city}&appid=${api.key}`).then(res => res.json());
    const {name, weather, main: {temp}, sys: {country}} = response;
    store = {
        name,
        weather: weather[0].main,
        temp,
        country
    };
    renderComponent();
};

const getLoader = () => {
    container.innerHTML = `<span class="loader"></span>`;
}

const renderComponent = () => {
    container.innerHTML = getContent();
}

const getContent = () => {

    const {name, weather, temp, country} = store;

    return `<div class="location-box">
                    <div class="location">
                        ${name}, ${country}
                    </div>
                    <div class="date">${dateBuilder(new Date())}</div>
                </div>

                <div class="weather-box">
                    <div class="temp">${temp} &deg;C</div>
                    <div class="weather">${weather}</div>
                </div>`
}

// //в стрелочных функциях вызвать функцию до её объяления вызовет ошибку(в отличии от обычных функций)
// // хостинг в js - все вары и функции он инициализирует в начале
// logger();
// const logger = () => {
//     console.log('test');
//     console.log(a);
// }
//
// var a = 7;//объявляется в начале, а примет значение только здесь, потому лучше только let или const
// logger();

fetchData();