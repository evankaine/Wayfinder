

const planetList = document.querySelector('.planet-list')

let page = 0,
    counterrx = setInterval(timerrx, 1), 
  counterry; 

  

  




async function getData() {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/?page=${page}`)

    const renderList = (response.data.results)
    console.log(renderList)
    for (i = 0; i < renderList.length; i++) {

      const titleDiv = document.createElement('div')
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
getData()


// const minusButton = document.getElementById('minus');
// const plusButton = document.getElementById('plus');

// minusButton.addEventListener('click', event => {
//   event.preventDefault();
//   let change = page - 1
//   console.log(change)
// });

// plusButton.addEventListener('click', event => {
//   event.preventDefault();
//   let change = page + 1
//   console.log(change)
// });

