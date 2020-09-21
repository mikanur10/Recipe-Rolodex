Access - Control - Allow - Origin *
  
const input = document.querySelector('#blank');
const button = document.querySelector('#search');

button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`http://www.recipepuppy.com/api/?q=${userInput}`)
  renderList(response.data.results)
});
