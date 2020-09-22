// function removeList() {
//   const oldList = document.querySelector('recipe-container')
//   while (oldList.lastChild) {
//     oldList.removeChild(oldList.lastChild)
//   }
// }

const input = document.querySelector('#blank')
const button = document.querySelector('#search');

button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${userInput}`)
  // console.log(response)
  renderList(response.data.results)
});

const recipeDisplay = document.querySelector('.results-list');


const renderList = recipes => {
  recipes.forEach(recipe => {
    const recipeContainer = document.createElement('div');
    recipeContainer.className = 'recipe-container';

    const title = document.createElement('h2');
    title.innerHTML = recipe.title;
    recipeContainer.appendChild(title);

    if (recipe.thumbnail != "") {
      const image = document.createElement('img');
      image.setAttribute('src', recipe.thumbnail);
      recipeContainer.appendChild(image);
    }

    const ingredients = document.createElement('p');
    ingredients.innerHTML = recipe.ingredients;
    recipeContainer.appendChild(ingredients);

    const recipeLink = document.createElement('p');
    recipeLink.innerHTML = recipe.href;
    recipeContainer.appendChild(recipeLink);

    recipeDisplay.appendChild(recipeContainer);
  })
}