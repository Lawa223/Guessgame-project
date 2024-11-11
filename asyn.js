'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country" className = ''>
     <img class="country__img" src="${data.flag}" alt="" />
     <div class="country__data">
       <h3 class="country__name">${data.name}</h3>
       <h4 class="country__region">${data.region}</h4>
       <p class="country__row"><span>🤼</span>${(
         +data.populaton / 1000000
       ).toFixed(1)}
       people</p>
       <p class="country__row"><span>🌎</span>${data.languages[0].name}</p>
       <p class="country__row"><span>💰</span>${data.currecies[0].name}</p>
     </div>
   </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

///////////////////////////////////////////////////////////////////////////////////

// const getCountryAntNeighbour = function (country) {
//   //  AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', ` https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //  AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       ` https://restcountries.eu/rest/v2/alpha/${neighbour}`
//     );
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAntNeighbour('nigeria');
// getCountryAntNeighbour('portugal');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

////////////////////////////////////////////////////////////////////////////////////

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//       //   err => alert(err)
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // Country 2
//       fetch(` https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     // .catch(err => alert(err));
//     .catch(err => {
//       console.error(`${err} ✴✴✴`);
//       renderError(`Something went wrong ✴✴ ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found');

//       // Country 2
//       getJSON(
//         ` https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     // .catch(err => alert(err));
//     .catch(err => {
//       console.error(`${err} ✴✴✴`);
//       renderError(`Something went wrong ✴✴ ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('nigeria');
// });

// // CODDING CHALLENGE ##

// const whereAMI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=xml&auth=your_api_key`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);

//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))

//     .catch(err => console.error(`${err.message} ✴`));
// };

// whereAMI(52.508, 13.381);
// whereAMI(19.037, 72.873);
// whereAMI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw is happening 🔮');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeOut
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log(' 4 seconds paassed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('problem!')).catch(x => console.error(x));
/////////////////////////////////////////////////////////////////////////
// Promiscifying the Geolocation API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     //     navigator.geolocation.getCurrentPosition(
//     //       position => resolve(position),
//     //   err => reject(err));

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(pos => console.log(pos));

// const whereAMI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=xml&auth=your_api_key`
//       );
//     })

//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);

//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))

//     .catch(err => console.error(`${err.message} ✴`));
// };

/////////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE 2#

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };
// let currentImg;

// createImage('p25.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('p25.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res =>console.log(res));

// const whereAMI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse Geocoding
//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=xml&auth=your_api_key`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();
//     // console.log(dataGeo);

//     // Country data
//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!resGeo.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     // console.log(data);
//     renderCountry(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err} ✴`);
//     renderError(` ✴ ${err.message}`);

//     // Reject promise return from async function
//     throw err;
//   }
// };
// console.log('1: will get location');
// // const city = whereAMI()
// // console.log(city)
// whereAMI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} ✴`))
//   .finally(() => console.log('3: Finish getting location'));

// (async function () {
//   try {
//     const city = await whereAMI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} ✴`);
//   }
//   console.log('3: Finish getting location');
// });

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );

//     // console.log(data1.capital, data2.capital, data3.capital);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('nigeria', 'portugal', 'canada');

// // Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/nigeria`),
//     getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//     getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeOut = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
//   timeOut(1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(eer => console.error(err));

// // Promise.allSetled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res[0]));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res[0]))
//   .catch(eer => console.error(err));

// // Promise.any [ES2021]

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res[0]))
//   .catch(eer => console.error(err));

///  CODING CHALLENGE
// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('p25.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 1
    img = await createImage('p1.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

loadNPause();

// PART 2
const loadAll = async function () {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll('p25.jpg', 'p1.jpg', 'p25.jpg');
