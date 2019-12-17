const endpoint = 'https://api.punkapi.com/v2/beers';
const endpointForABeer = 'https://api.punkapi.com/v2/beers/1'
const endpointForABeerRandom = 'https://api.punkapi.com/v2/beers/random'
const endpointForTenBeers = 'https://api.punkapi.com/v2/beers/10'
const beerEl = document.getElementById('beerBox');
const beerList = document.getElementById('beerList')
// beerEl.textContent = 'loading . . .';

async function displayBeer() {
  const response = await fetch(endpoint);
  const data = await response.json();
    // console.log(data);
  data.map((beer) => {
    // beerEl.textContent = beer.name;
    const name = document.createElement('li');
    const tagline = document.createElement('li');
    const abv = document.createElement('li');
    const img = document.createElement('img');
    img.src = beer.image_url;
    tagline.innerHTML = `"${beer.tagline}"`;
    name.innerHTML = `${beer.name}`;
    abv.innerHTML = `ABV: ${beer.abv}`
    beerList.appendChild(img);
    beerList.appendChild(name);
    beerList.appendChild(tagline);
    beerList.appendChild(abv);
  })
//   console.log(data);
//     // beerEl.textContent = `${data[0].tagline}`
//     // const img = document.createElement('img');
//     // img.src = `${data[3].image_url}`
//     // beerEl.appendChild(img);
// }

// function handleError(err) {
//   console.log('OH NO!');
//   console.log(err);
}

async function displayTenBeers() {
  const response = await fetch(endpoint);
  const data = await response.json();
  const tenBeers = [];
  tenBeers.push(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8], data[9]);
    // console.log(data);
  tenBeers.map((tenBeers) => {
    // beerEl.textContent = beer.name;
    const name = document.createElement('li');
    const tagline = document.createElement('li');
    const abv = document.createElement('li');
    const img = document.createElement('img');
    img.src = tenBeers.image_url;
    tagline.innerHTML = `"${tenBeers.tagline}"`;
    name.innerHTML = `${tenBeers.name}`;
    abv.innerHTML = `ABV: ${tenBeers.abv}`
    beerList.appendChild(img);
    beerList.appendChild(name);
    beerList.appendChild(tagline);
    beerList.appendChild(abv);
  })
//   console.log(data);
//     // beerEl.textContent = `${data[0].tagline}`
//     // const img = document.createElement('img');
//     // img.src = `${data[3].image_url}`
//     // beerEl.appendChild(img);
// }

// function handleError(err) {
//   console.log('OH NO!');
//   console.log(err);
}

async function displayABeer () {
  const resp = await fetch(endpointForABeer);
  const data = await resp.json();
  data.map((data) => {
    // beerEl.textContent = beer.name;
    const name = document.createElement('li');
    const tagline = document.createElement('li');
    const abv = document.createElement('li');
    const img = document.createElement('img');
    img.src = data.image_url;
    tagline.innerHTML = `"${data.tagline}"`;
    name.innerHTML = `${data.name}`;
    abv.innerHTML = `ABV: ${data.abv}`
    beerList.appendChild(img);
    beerList.appendChild(name);
    beerList.appendChild(tagline);
    beerList.appendChild(abv);
  })
}

// displayABeer();
// displayBeer();
// displayTenBeers();

// console.log(data[0]);

// async function getABeer (fetch) {
//   const resp = await fetch('https://api.punkapi.com/v2/beers/1');
//   const data = await resp.json();
//   // console.log(data);
// }

// getABeer();

// const assert = require('assert');

// describe('getABeer', () => {
//   it('should call fetch with the correct url', () => {
//     const fakeFetch = url => {
//       assert(
//         url ===
//         'https://api.punkapi.com/v2/beers/1'
//       )
//     }

//     getABeer(fakeFetch);
//   })
// })

console.log('hi everybody!')


setTimeout(function timeoutOneSecond() {
    console.log('that took a while!')

}, 1000);

setTimeout(function timeoutThreeSeconds() {
    console.log('*pause for laughter*')

}, 3000);

setTimeout(function timeoutSevenSeconds() {
    console.log('that took even longer!')

}, 7000);

setTimeout(function timeoutNineSeconds() {
    console.log('fin.')

}, 9000);

console.log('and now,');

console.log('only after');

console.log('all these');

console.log('are done, ');

console.log('do those timeouts');

console.log('finally');

console.log('get to do their thing.')
