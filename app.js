const endpoint = 'https://api.punkapi.com/v2/beers';
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
    beerList.appendChild(name);
    beerList.appendChild(tagline);
    beerList.appendChild(abv);
    beerList.appendChild(img);
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

displayBeer();

// console.log(data[0]);