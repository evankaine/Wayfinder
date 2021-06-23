

const planetList = document.querySelector('.planet-list')


const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

let page = 1
  
minusButton.addEventListener('click', event => {
  event.preventDefault();
  removeThis()
  page--

    getData(page)
    console.log(page)
    return page
  });

  plusButton.addEventListener('click', event => {
    event.preventDefault();
    removeThis()
    page++
    getData(page)
    console.log(page)
    return page
  });

async function getData(a) {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`)

    const renderList = (response.data.results)
    console.log(renderList)
    for (i = 0; i < renderList.length; i++) {

      const titleDiv = document.createElement('div')
      titleDiv.classList.add('cards')
      planetList.append(titleDiv)

      const titleName = document.createElement('h3')

      titleName.textContent = `${renderList[i].name}`
      titleDiv.append(titleName)

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



