const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
const randomMeal = document.getElementById('randomMeal');

let search = ''

const fetchSearch = async () => {
    meals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    ).then(res => res.json())
        .then(res => res.meals)
    console.log(meals);
}

const searchDisplay = async () => {
    await fetchSearch();
    if (meals == null) {
        results.innerHTML = '<span class="noResult">Aucun résultat</span>';
    }
    results.innerHTML = (
        meals.map(meal => (
            `
            <div class="searchContainer">
                <h2>${meal.strMeal}</h2>
                <div class="infos">
                    <div>origine : ${meal.strArea} </div>
                    <div>categorie : ${meal.strCategory} </div>
                </div>
                <img src="${meal.strMealThumb}" alt=""></br>
                <a href="${meal.strYoutube}" target="_blanck"> <i class="fab fa-youtube"></i></a>
            </div>
    `
        )).join('')
    );
}

searchInput.addEventListener('input', (e) => {
    search = e.target.value
    searchDisplay();
})