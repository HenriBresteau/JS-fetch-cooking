const searchInput = document.getElementById('searchInput');
const results= document.getElementById('results');
const randomMeal = document.getElementById('randomMeal');

const fetchSearch = async() => {
    meals = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=tomato`
    ).then(res=> res.json())
    .then(res => res.meals)
    console.log(meals);
}

fetchSearch();