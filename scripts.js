
function newImg(themeArchive, themeElement) { //toma la ruta del themeArchive y themeElement es el elemento dentro de la lista 
    const img = document.createElement('img')
    img.src = "./Imgs/Me/" + themeArchive + "/" + themeElement + ".jpeg";
    img.alt = themeElement;
    img.classList.add("d-block", "w-100")
    return img
}
function selectDivThemeCarousel(theme) {
    const themeDiv = document.getElementById(theme) //toma el carousel del tema del argumento 
    return themeDiv
}
function createCarousel(theme, imgList) {
    const themeDiv = selectDivThemeCarousel(theme) // selecciona el el div con el tema 
    for (const [index, elementOfList] of imgList.entries()) {
        if (index === 0) {
            console.log(index, elementOfList)
            const carouselItem = document.createElement('div') //no se toca
            carouselItem.classList.add('carousel-item', 'active') // no se toca 
            const img = newImg(theme, elementOfList)
            carouselItem.appendChild(img);
            themeDiv.appendChild(carouselItem);
        } else {
            console.log(index, elementOfList)
            const carouselItem = document.createElement('div')
            carouselItem.classList.add('carousel-item')
            const img = newImg(theme, elementOfList)
            carouselItem.appendChild(img);
            themeDiv.appendChild(carouselItem);
        }
    }
}
// creo un array con todas las url 
const mealsImages = ["Chivito", "MilanesaNapolitana", "Pizza", "PastaWithTuco"];
const gamesImages = ["Starcraft1", "Starcraft1-game", "Diablo1", "Diablo1-game", "Warcraft3", "Warcraft3-game", "Caesar3", "Caesar3-game", "LeagueOfLegends", "LeagueOfLegends-game"]
const activityImages = ["FutbolMessi", "FutbolSeleccion", "Gym", "Gym-staf"]
//recorrer todos los elementos buscando los nombres para agregarlos al url
// tener una funcion que acepte argumentos meal, games, activity 
// el alt debe ser el nombre de la imagen 


function loadingImg() {
    createCarousel('meals', mealsImages)
    createCarousel('videogames', gamesImages)
    createCarousel('activity', activityImages)

}
//imgList= ['mealsImages','gamesImages','activityImages']
//theme = ['meals','games','activity']
