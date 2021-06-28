# Project Overview

## Project Name

Wayfinder
https://evankaine.github.io/Wayfinder/

## Project Description

This project allows the user to search the Star Wars galaxy to find planets and access detailed information about the desired location.

## API and Data Sample

https://swapi.dev/api/planets/

```json
{
    "count": 60, 
    "next": "https://swapi.dev/api/planets/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Tatooine", 
            "rotation_period": "23", 
            "orbital_period": "304", 
            "diameter": "10465", 
            "climate": "arid", 
            "gravity": "1 standard", 
            "terrain": "desert", 
            "surface_water": "1", 
            "population": "200000", 
            "residents": [
                "https://swapi.dev/api/people/1/", 
                "https://swapi.dev/api/people/2/", 
                "https://swapi.dev/api/people/4/", 
                "https://swapi.dev/api/people/6/", 
                "https://swapi.dev/api/people/7/", 
                "https://swapi.dev/api/people/8/", 
                "https://swapi.dev/api/people/9/", 
                "https://swapi.dev/api/people/11/", 
                "https://swapi.dev/api/people/43/", 
                "https://swapi.dev/api/people/62/"
            ], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/4/", 
                "https://swapi.dev/api/films/5/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-09T13:50:49.641000Z", 
            "edited": "2014-12-20T20:58:18.411000Z", 
            "url": "https://swapi.dev/api/planets/1/"
        }, 
        {
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grasslands, mountains", 
            "surface_water": "40", 
            "population": "2000000000", 
            "residents": [
                "https://swapi.dev/api/people/5/", 
                "https://swapi.dev/api/people/68/", 
                "https://swapi.dev/api/people/81/"
            ], 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-10T11:35:48.479000Z", 
            "edited": "2014-12-20T20:58:18.420000Z", 
            "url": "https://swapi.dev/api/planets/2/"
        }, 
        {
            "name": "Yavin IV", 
            "rotation_period": "24", 
            "orbital_period": "4818", 
            "diameter": "10200", 
            "climate": "temperate, tropical", 
            "gravity": "1 standard", 
            "terrain": "jungle, rainforests", 
            "surface_water": "8", 
            "population": "1000", 
            "residents": [], 
            "films": [
                "https://swapi.dev/api/films/1/"
            ], 
            "created": "2014-12-10T11:37:19.144000Z", 
            "edited": "2014-12-20T20:58:18.421000Z", 
            "url": "https://swapi.dev/api/planets/3/"
        }
```
## Wireframes

https://i.imgur.com/z1sZLds.png

#### MVP 

- render first 10 planets on page (name, climate ,terrain) 
- remove previous page data
- allow user to cycle through next 10 planets

#### PostMVP  

- ~~allow user to click on planet and render planet data~~
- add images to the data (not included in api)
- ~~add list of characters to their homeplanet that is selected by user~~

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| Initial Clickable Model  | Complete
|June 25| MVP | Complete
|June 28| Presentations | Complete

## Priority Matrix

https://i.imgur.com/8Gbv5CR.png

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| basic html, css, and javascript | H | 3hrs| 3hrs | 3hrs |
| ~~click event for search bar~~ | H | 2hr| -- | -- |
| *ADDED* create increment and decreament buttons | H | 2hrs| 4hrs | 4hrs |
| render planet data to DOM | H | 2hrs| 2hrs | 2hrs |
| ~~link all 6 pages of api to one variable~~| H | 3hrs| -- | -- |
| append specific planet data| H | 3hrs| 2.5hrs | 2.5hrs |
| display data from all api pages | H | 3hrs| 3hrs | 3hrs |
| create remove function | H | 1hr| .5hr | .5hr |
| flexbox planet data | H | 3hrs| 2.5hrs | 2.5hrs |
| flexbox footer | H | 2hrs| 1hr | 1hr |
| css fonts | H | 1hrs| 1.5hrs | 1.5hrs |
| css information cards | H | 3hrs| 3hrs | 3hrs |
| css button style | H | 3hrs| 4hrs | 4hrs |
| add icons| H | 2hrs| 1hr | 1hr |
| add links to icons | H | 2hrs| 1hr | 1hr |
| media query planet information cards | H | 2hrs| 2hrs | 2hrs |
| media query icons | H | 2hrs| 2hrs | 2hrs |
| media query header text| H | 2hrs| 1.5hrs | 1.5hrs |
| media query footer| H | 2hrs| 1hrs | 1hrs |
| add images and append to DOM | H | 3hrs| 3hrs | 3hrs |
| ~~media query images~~ | H | 2hrs| -- | -- |
| Total | H | 38hrs| 40hrs | 40hrs |

## Code Snippet

```
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
    console.log(page)
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
    console.log(page)
    return page
  });
```

## Change Log
Wireframe of site was adjusted to accommodate page flipping site style instead of search engine style.
