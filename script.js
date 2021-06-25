
const planetList = document.querySelector('.planet-list')

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

let page = 1
  
minusButton.addEventListener('click', event => {
  event.preventDefault();
  removeThis()
  if (page > 1) {
    page--
  } else if (page = 1) {
    page = 6
  }
    getData(page)
    return page
  });

plusButton.addEventListener('click', event => {
  event.preventDefault();
  removeThis()
  if (page < 6) {
    page++
  } else if (page = 6) {
    page = 1
  }
  getData(page)
    return page
  });



async function getData() {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`)

    const renderList = (response.data.results)
  

    for (i = 0; i < renderList.length; i++) {

      const titleDiv = document.createElement('div')
      titleDiv.classList.add('cards')
      planetList.append(titleDiv)
     
      const titleName = document.createElement('h3')

      titleName.textContent = `${renderList[i].name}`
      titleDiv.append(titleName)
      
      const imgPoster = document.createElement('img')
      imgPoster.classList.add('satellite')
      imgPoster.setAttribute('src', `./Planet-images/${renderList[i].name}.jpeg`)
      titleDiv.append(imgPoster)

      const terrain = document.createElement('h4')
      terrain.textContent = `Terrain: ${renderList[i].terrain}`
      titleDiv.append(terrain)

      const climate = document.createElement('h4')
      climate.textContent = `Climate: ${renderList[i].climate}`
      titleDiv.append(climate)

      const rotate = document.createElement('h4')
      rotate.textContent = `Rotation: ${renderList[i].rotation_period}`
      titleDiv.append(rotate)

      const orbit = document.createElement('h4')
      orbit.textContent = `Orbit: ${renderList[i].orbital_period}`
      titleDiv.append(orbit)

      
    }
    return response
  } catch (error) {
    console.log(error)
  }
}
getData(page)



function removeThis() {
  while (planetList.lastChild) {
    planetList.removeChild(planetList.lastChild)
  }
}



// reference https://www.w3schools.com/howto/howto_js_scroll_to_top.asp //
const goTop = document.getElementById('scrollToTopBtn');

goTop.addEventListener('click', event => {
  event.preventDefault();
  topFunction()
  });

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }