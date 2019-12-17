const endpoint = 'https://api.punkapi.com/v2/beers';
const endpointForABeer = 'https://api.punkapi.com/v2/beers/1'
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
  console.log(data);
    // beerEl.textContent = `${data[0].tagline}`
    // const img = document.createElement('img');
    // img.src = `${data[3].image_url}`
    // beerEl.appendChild(img);
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
}

async function getABeer (fetch) {
  const resp = await fetch(endpointForABeer);
  const data = await resp.json();
  console.log(data);
}

// getABeer();
displayBeer();

// console.log(data[0]);

const assert = require('assert');

describe('getABeer', () => {
  it('should call fetch with the correct url', () => {
    const fakeFetch = url => {
      assert(
        url ===
        'https://api.punkapi.com/v2/beers/1'
        )
        return new Promise(function(resolve) {

        })
    }

    getABeer(fakeFetch);
  })
})