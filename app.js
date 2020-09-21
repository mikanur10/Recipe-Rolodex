
const input = document.querySelector('#blank')
const button = document.querySelector('#search');

button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${userInput}`)
  // console.log(response)
  renderList(response.data.results)
});

const recipeDisplay = document.querySelector('.results-list'); //grabs .movie-list class when we want to make our movie list

const renderList = recipes => { //function to run through all movies that appear in api search
  recipes.forEach(recipe => { //loop to go through each movie
    const recipeContainer = document.createElement('div');// div container for all movies from search
    recipeContainer.className = 'recipe-container';//gives container class name 

    const title = document.createElement('h3');
    title.innerHTML = recipe.title;
    recipeContainer.appendChild(title);//creates h3 element that takes movie's title from api db and adds to browser

    if (recipe.thumbnail != " ") {
      const image = document.createElement('img');
      image.setAttribute('src', recipe.thumbnail);
      recipeContainer.appendChild(image);// creates image element that takes movies posters from api and adds to browser
    }

    const ingredients = document.createElement('p');
    ingredients.innerHTML = recipe.ingredients;
    recipeContainer.appendChild(ingredients);// creates an image element that takes the movie poster from api and adds to browser

    const recipeLink = document.createElement('p');
    recipeLink.innerHTML = recipe.href;
    recipeContainer.appendChild(recipeLink);

    recipeDisplay.appendChild(recipeContainer);//takes finished list and adds to div container
  })
}