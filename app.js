//creating the input and button variables by selecting the respective IDs
const input = document.querySelector('#blank')
const button = document.querySelector('#search');

//adding and event listener to trigger when the button is clicked, gathers input values, calls an API search and renders the list to the DOM
button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${userInput}`)
  renderList(response.data.results)
});

//grabs results-list class when we want to make our recipe list
const recipeDisplay = document.querySelector('.results-list');

//function to run through all recipes that appear in api search, loop through each recipe, create a div container for all recipes in the search and creates a className for the container
const renderList = recipes => {
  removeList()
  recipes.forEach(recipe => {
    const recipeContainer = document.createElement('div');
    recipeContainer.className = 'recipe-container';
    //creates h2 element that takes recipe titles from the API, returns it as HTML content, and appends to the recipeContainer. Uses dynamic styling to add a border, background color and box shadow.
    const title = document.createElement('h2');
    title.innerHTML = recipe.title;
    recipeContainer.appendChild(title).style.border = '3px solid black';
    title.style.backgroundColor = '#D56237';
    title.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';
    // if statement to filter out any non-existent images. Creates an img element, sets the source to the thumbnail in the API and appends to the recipeContainer. Dynamic styling to add a box shadow. 
    if (recipe.thumbnail != "") {
      const image = document.createElement('img');
      image.setAttribute('src', recipe.thumbnail);
      recipeContainer.appendChild(image);
      image.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';
    }
    //creates p element that takes recipe ingredients from the API, returns it as HTML content, and appends to the recipeContainer. Uses dynamic styling to change the font style and size.
    const ingredients = document.createElement('p');
    ingredients.innerHTML = recipe.ingredients;
    recipeContainer.appendChild(ingredients).style.font = "bold 20px serif";
    //creates link element that takes recipe links from the API, returns it as HTML content then a link using the href attribute, and appends to the recipeContainer. Uses dynamic styling to change font size and style.
    const recipeLink = document.createElement('a');
    recipeLink.innerHTML = recipe.href;
    recipeLink.setAttribute("href", recipe.href);
    recipeContainer.appendChild(recipeLink).style.font = "bold 20px serif";
    //appends the recipeContainer div to the recipeDisplay
    recipeDisplay.appendChild(recipeContainer);
  })
}
// function to remove the content from the previous search when a new search is executed, invoked on line 17 just before the new list is rendered
function removeList() {
  const oldList = recipeDisplay
  while (oldList.lastChild) {
    oldList.removeChild(oldList.lastChild)
  }
}
