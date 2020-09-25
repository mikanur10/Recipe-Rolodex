## Recipe Rolodex 

## Description

Recipe Rolodex is a website where users can search for any dish and return a recipe and image of the dish. 

## API and Data Sample
http://www.recipepuppy.com/api/.

```
{
    "title": "Recipe Puppy",
    "version": 0.1,
    "href": "http://www.recipepuppy.com/",
    "results": [
        {
            "title": "Ginger Champagne",
            "href": "http://allrecipes.com/Recipe/Ginger-Champagne/Detail.aspx",
            "ingredients": "champagne, ginger, ice, vodka",
            "thumbnail": "http://img.recipepuppy.com/1.jpg"
        },
        {
            "title": "Potato and Cheese Frittata",
            "href": "http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx",
            "ingredients": "cheddar cheese, eggs, olive oil, onions, potato, salt",
            "thumbnail": "http://img.recipepuppy.com/2.jpg"
        },
        {
            "title": "Eggnog Thumbprints",
            "href": "http://allrecipes.com/Recipe/Eggnog-Thumbprints/Detail.aspx",
            "ingredients": "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
            "thumbnail": "http://img.recipepuppy.com/3.jpg"
        },
        {
            "title": "Succulent Pork Roast",
            "href": "http://allrecipes.com/Recipe/Succulent-Pork-Roast/Detail.aspx",
            "ingredients": "brown sugar, garlic, pork chops, water",
            "thumbnail": "http://img.recipepuppy.com/4.jpg"
        },
        {
            "title": "Irish Champ",
            "href": "http://allrecipes.com/Recipe/Irish-Champ/Detail.aspx",
            "ingredients": "black pepper, butter, green onion, milk, potato, salt",
            "thumbnail": "http://img.recipepuppy.com/5.jpg"
        },
        {
            "title": "Chocolate-Cherry Thumbprints",
            "href": "http://allrecipes.com/Recipe/Chocolate-Cherry-Thumbprints/Detail.aspx",
            "ingredients": "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
            "thumbnail": "http://img.recipepuppy.com/6.jpg"
        },
        {
            "title": "Mean Woman Pasta",
            "href": "http://allrecipes.com/Recipe/Mean-Woman-Pasta/Detail.aspx",
            "ingredients": "garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato",
            "thumbnail": "http://img.recipepuppy.com/7.jpg"
        },
        {
            "title": "Hot Spiced Cider",
            "href": "http://allrecipes.com/Recipe/Hot-Spiced-Cider/Detail.aspx",
            "ingredients": "allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt",
            "thumbnail": "http://img.recipepuppy.com/8.jpg"
        },
        {
            "title": "Isa's Cola de Mono",
            "href": "http://allrecipes.com/Recipe/Isas-Cola-de-Mono/Detail.aspx",
            "ingredients": "cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar",
            "thumbnail": "http://img.recipepuppy.com/9.jpg"
        },
        {
            "title": "Amy's Barbecue Chicken Salad",
            "href": "http://allrecipes.com/Recipe/Amys-Barbecue-Chicken-Salad/Detail.aspx",
            "ingredients": "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato",
            "thumbnail": "http://img.recipepuppy.com/10.jpg"
        }
    ]
}
```

## Wireframe

https://www.figma.com/file/W1HXtNdRRg2s1hMuPDYGxY/Untitled?node-id=0%3A1

The above wireframe depicts a single page website with a header, containing the text "Recipe Rolodex" and a circle shaped logo image underneath. Below the logo image will be a search bar and submit button where the user can enter whichever recipe they would like to explore. Beneath the search and submit button will be two containers side by side, one with an image of the searched recipe to the left and the ingredients/recipe to the right. The bottom of the page will feature a footer where my name and information will be posted, as well as attribution to the API I am using. 

### MVP/PostMVP

#### MVP 
- Use HTML, CSS and JavaScript to create the website
- Use AXIOS to retrieve and display data from the recipe puppy API on the DOM
- Display data on the webpage
- structure the page according to the linked wireframe above, utilizing CSS and Flex Box
- Create a search bar and submit button that display the recipes below
- When searched, display the title, image, ingredients and recipe link
- when a new search is initiated, delete the existing recipe and image
- Implement responsive design using a media query
- Deploy the site

#### PostMVP  
- Add an animation during the loading period, which is after submit is pushed and before the content loads
- Create a second randomization button, which, when clicked, will generate a random recipe for the user instead of a specified recipe

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval, Core Application Structure (HTML, CSS, JavaScript) | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, JavaScript cont'd.), | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

https://docs.google.com/document/d/1RSHjwyk2Qi2OBm26qjt-d5fVV_WpCxaeqRhRWdA-570/edit?usp=sharing

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| proposal and approval | H | 3hr| 3hr  | 3hr |
| creating HTML | H | 1hr| 1hr | 1hr |
| basic CSS | H | 2hrs| 2hrs | 2hrs |
|flexbox styling | H | 3hrs| 1 hr | 1 hr |
| API fetch | H | 1hr| 2hrs| 2hrs |
| creating event listener | H | 1hr| 1hr | 1hr |
| creating recipe container | H | 2hr| 2hr | 2hr |
| creating title element | H | 2hr| 2hr | 2hr |
| creating image element | H | 2hr| 2hr | 2hr |
| creating ingredients element | H | 2hr| 2hr | 2hr |
| creating recipe link element | H | 2hr| 2hr | 2hr |
| creating function to remove list| H | 2hr| 2hr | 2hr |
| advanced CSS | H | 3hrs| 3hrs | 3hrs |
| animation | L | 3hrs| 1hr | 1hr |
| getting second API | L | 2hrs| 0 | 0 |
| randomization| L | 3hrs| 1hr | 1hr |
| Total | H | 31hrs| 29hrs | 29hrs |

## Code Snippet

An example of functional code with dynamic styling

```
 if (recipe.thumbnail != "") {
      const image = document.createElement('img');
      image.setAttribute('src', recipe.thumbnail);
      recipeContainer.appendChild(image);
      image.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)';
    }

```

## Change Log
- Changed wireframe and parameters to include a recipe link instead of the written out recipe, due to the limitations of the API. 