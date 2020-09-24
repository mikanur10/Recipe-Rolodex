// { "headers": { "Access-Control-Allow-Origin": "*" } })
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
  removeList()
  recipes.forEach(recipe => {
    const recipeContainer = document.createElement('div');
    recipeContainer.className = 'recipe-container';

    const title = document.createElement('h2');
    title.innerHTML = recipe.title;
    recipeContainer.appendChild(title).style.border = '3px solid black';

    if (recipe.thumbnail != "") {
      const image = document.createElement('img');
      image.setAttribute('src', recipe.thumbnail);
      recipeContainer.appendChild(image);
    }

    const ingredients = document.createElement('p');
    ingredients.innerHTML = recipe.ingredients;
    recipeContainer.appendChild(ingredients).style.font = "bold 20px serif";

    const recipeLink = document.createElement('a');
    recipeLink.innerHTML = recipe.href;
    recipeLink.setAttribute("href", recipe.href);
    recipeContainer.appendChild(recipeLink).style.font = "bold 20px serif";

    recipeDisplay.appendChild(recipeContainer);
  })
}
function removeList() {
  const oldList = recipeDisplay
  while (oldList.lastChild) {
    oldList.removeChild(oldList.lastChild)
  }
}
