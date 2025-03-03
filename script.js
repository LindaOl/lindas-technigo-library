/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure to create
some properties that is possible to filter and sort.

Remember to remove code you don't need.
*/

const recipes = [
  {
    name: 'Individual vegetarian lasagnes',
    cuisineType: ['Italian'],
    ingredients: [
      '1.2 kg cherry tomatoes',
      '5 sprigs of fresh thyme',
      'extra virgin olive oil',
      '2 shallots',
      '2 cloves of garlic',
      '500 g baby spinach',
      '8-12 fresh or dried lasagne sheets',
      '350 g ricotta cheese',
      'WHITE SAUCE',
      '600 ml milk',
      '25 g unsalted butter',
      '2 heaped tablespoons flour',
      '150 g vegetarian sharp, mature cheese',
      '100 g mozzarella'
    ],
    source: 'Jamie Oliver',
    totalTime: 130,
    url: 'http://www.jamieoliver.com/recipes/vegetables-recipes/individual-vegetarian-lasagnes/',
    image: './recipe-images/individual-vegetarian-lasagnes.jpg'
  },
  {
    name: 'Vegetarian Stir-Fried Garlic Scape',
    cuisineType: ['Balanced'],
    ingredients: [
      '8 oz. garlic scapes',
      '3 oz. baby corn',
      '3 oz. carrots',
      '1 oz. dried shiitake mushrooms',
      '1 clove of garlic sliced thinly',
      '3 slices of fresh ginger root',
      '2 tablespoons vegetable oil',
      '1/4 cup shaoxing cooking wine',
      '1/4 vegetarian stock or water',
      '1 tablespoon light soy sauce',
      '1 teaspoon sugar',
      '1 teaspoon cornstarch',
      '1/4 teaspoon ground white pepper'
    ],
    source: 'Red Cook',
    totalTime: null,
    url: 'http://redcook.net/2010/06/16/garlic-scape-an-off-menu-treat/',
    image: './recipe-images/vegetarian-stir-fried-garlic-s.jpg'
  },
  {
    name: 'Cheat’s cheesy focaccia',
    cuisineType: ['Italian'],
    ingredients: [
      '500g pack bread mix',
      '2 tbsp olive oil , plus a little extra for drizzling',
      '25g parmesan (or vegetarian alternative), grated',
      '75g dolcelatte cheese (or vegetarian alternative)'
    ],
    source: 'BBC Good Food',
    totalTime: 40,
    url: 'https://www.bbcgoodfood.com/recipes/cheats-cheesy-focaccia',
    image: './recipe-images/cheat’s-cheesy-focaccia.jpg'
  },
  {
    name: "Vegetarian Shepherd's Pie",
    cuisineType: ['Balanced', 'High-Fiber'],
    ingredients: [
      '2 tablespoons extra-virgin olive oil',
      '1 large onion, finely diced',
      '2 carrots, peeled and thinly sliced',
      '2 celery stalks, thinly sliced',
      '10 ounces cremini mushrooms, trimmed and sliced',
      '1 tablespoon tomato paste',
      "1 tablespoon vegetarian Worcestershire sauce, such as Annie's Naturals",
      '1 dried bay leaf',
      '1 cup French green lentils, picked over',
      'Kosher salt and freshly ground pepper',
      '1 cup frozen peas',
      '2 pounds Yukon Gold potatoes, scrubbed and cut into 1 1/2-inch pieces',
      '4 cloves garlic',
      '4 tablespoons unsalted butter',
      '1/2 cup whole milk, warmed'
    ],
    source: 'Martha Stewart',
    totalTime: 120,
    url: 'https://www.marthastewart.com/1535235/vegetarian-shepherds-pie',
    image: "./recipe-images/vegetarian-shepherd's-pie.jpg"
  },
  {
    name: 'Chicken Paprikash',
    cuisineType: ['Low-Carb'],
    ingredients: [
      '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
      '1/2 teaspoon salt',
      '1/4 teaspoon black pepper',
      '1 tablespoon butter – cultured unsalted (or olive oil)',
      '240 grams onion sliced thin (1 large onion)',
      '70 grams Anaheim pepper chopped (1 large pepper)',
      '25 grams paprika (about 1/4 cup)',
      '1 cup chicken stock',
      '1/2 teaspoon salt',
      '1/2 cup sour cream',
      '1 tablespoon flour – all-purpose'
    ],
    source: 'No Recipes',
    totalTime: 80,
    url: 'http://norecipes.com/recipe/chicken-paprikash/',
    image: './recipe-images/chicken-paprikash.jpg'
  },
  {
    name: 'Baked Chicken',
    cuisineType: ['american'],
    ingredients: [
      '6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
      '1/2 teaspoon coarse salt',
      '1/2 teaspoon Mrs. Dash seasoning',
      '1/4 teaspoon freshly ground black pepper'
    ],
    source: 'Martha Stewart',
    totalTime: 90,
    url: 'http://www.marthastewart.com/318981/baked-chicken',
    image: './recipe-images/baked-chicken.jpg'
  },
  {
    name: 'Deep Fried Fish Bones',
    cuisineType: ['south east asian'],
    ingredients: ['8 small whiting fish or smelt', '4 cups vegetable oil'],
    source: 'Serious Eats',
    totalTime: 31,
    url: 'http://www.seriouseats.com/recipes/2011/03/deep-fried-fish-bones-recipe.html',
    image: './recipe-images/deep-fried-fish-bones.jpg'
  },
  {
    name: 'Burnt-Scallion Fish',
    cuisineType: ['chinese'],
    ingredients: [
      '2 bunches scallions',
      '8 tbsp. butter',
      '2 8-oz. fish filets'
    ],
    source: 'Saveur',
    totalTime: 70,
    url: 'http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Curry-Crusted Fish',
    cuisineType: ['south east asian'],
    ingredients: [
      '3 slices bread , about 85g/3oz in total',
      '1 lime',
      '1.0 tbsp Korma curry paste',
      '4 thick white fish fillets'
    ],
    source: 'BBC Good Food',
    totalTime: 80,
    url: 'http://www.bbcgoodfood.com/recipes/4717/',
    image: './recipe-images/fish-dish.jpg'
  },
  {
    name: 'Meat Stock',
    cuisineType: 'american',
    ingredients: [
      '2.5 pounds beef marrow bones',
      '1 large onion, quartered',
      '2 carrots, sliced',
      '1 leek, cleaned and sliced',
      '2 celery stalks, sliced',
      '2.5 pounds organic beef stew meat, cubed',
      '2 tablespoons tomato paste',
      '5 cloves garlic',
      '2 bay leaves',
      '3 sprigs thyme',
      '3 sprigs Italian parsley',
      '1/2 teaspoon black peppercorns'
    ],
    source: 'Food52',
    totalTime: 60,
    url: 'https://food52.com/recipes/3712-meat-stock',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Homemade Meat Broth',
    cuisineType: 'american',
    ingredients: [
      '1 teaspoon salt',
      '1 carrot, peeled',
      '1 medium onion, peeled',
      '2 or 3 celery stalks',
      '¼ red or yellow bell pepper, stripped of all its seeds',
      '1 small boiling potato, peeled',
      '1 ripe, fresh tomato, or 1 canned Italian plum tomato, drained of juice',
      '5 pounds assorted pieces of meat and bones (see meat suggestions above), of which no less than 1½ pounds is all meat'
    ],
    source: 'Cookstr',
    totalTime: 60,
    url: 'http://www.cookstr.com/recipes/il-brodo-homemade-meat-broth',
    image: './recipe-images/meat.jpg'
  },
  {
    name: 'Spice-Rubbed Grilled Flap Meat (Sirloin Tip) Recipe',
    cuisineType: 'south-american',
    ingredients: [
      '1 tablespoon whole black peppercorns, toasted',
      '1 teaspoon coriander seed, toasted',
      '1 teaspoon fennel seed, toasted',
      '1 teaspoon cumin pods, toasted',
      '1 teaspoon red pepper flakes',
      '1/2 teaspoon dried oregano',
      '2 medium cloves garlic, minced (about 2 teaspoons)',
      '2 tablespoons vegetable or canola oil',
      '1 whole flap meat steak, 2 to 2 1/2 pounds',
      'Kosher salt'
    ],
    source: 'Serious Eats',
    totalTime: 240,
    url: 'http://www.seriouseats.com/recipes/2012/05/spice-rubbed-grilled-flap-meat-sirloin-tip-recipe.html',
    image: './recipe-images/grilled.jpg'
  }
];

const meat = ['meat', 'beef', 'chicken'];

//run function to add all recipes to the page when it loads
window.addEventListener('DOMContentLoaded', () => {
  displayRecipes();
  loadDocumentCloseListener();
});

const recipeContainer = document.querySelector('#recipe-container');
const filterMenuButton = document.getElementById('filter-menu');
const filterDropdown = document.getElementById('filter-dropdown');
const sortMenuButton = document.getElementById('sort-menu');
const sortDropdown = document.getElementById('sort-dropdown');
const sortItems = document.querySelectorAll('#sort-dropdown li');
const listItems = document.querySelectorAll('#filter-dropdown li');

const sortByNameButton = document.getElementById('name');
const sortByReverseButton = document.getElementById('name-reverse');
const sortByTimeButton = document.getElementById('time');
const sortByDecendTimeButton = document.getElementById('time-decend');
const sortByMostButton = document.getElementById('most-ingredients');
const sortByLeastButton = document.getElementById('least-ingredients');
const sortButtons = [
  sortByLeastButton,
  sortByMostButton,
  sortByTimeButton,
  sortByDecendTimeButton,
  sortByNameButton,
  sortByReverseButton
];

const icon = document.createElement('img');
icon.src = './recipe-images/x_circle_icon.png';
icon.alt = 'icon';
icon.style.marginRight = '3px';
icon.id = 'icon'

const originalHTML = Array.from(sortItems).map(item => item.innerHTML);
const originalID = Array.from(sortItems).map(item => item.id);
let currentDisplayedRecipes = [...recipes];
let currentLinkClicked = null;

const getDefaultLinkText = () => {
  sortItems.forEach((item, index) => {
    item.innerHTML = originalHTML[index];
  });
  sortButtons.forEach(button => {
    button.style.paddingLeft = "10px";
  });
};

const getDefaultSorting = () => {
  displaySortedRecipes(currentDisplayedRecipes);
};

const resetOtherButtons = (buttonToKeepActive) => {
  sortItems.forEach((item, index) => {
    if (item !== buttonToKeepActive) {
      item.id = originalID[index];
      item.style.paddingLeft = "10px";
    }
  });
};


const makeList = (ingredientItem) => {
  return ingredientItem.map(ingredient => `<li>${ingredient}</li>`).join('');
};

recipes.forEach(recipe => {
  if (isNaN(recipe.totalTime)) {
    recipe.totalTime = 0;
  };
});
const sortByTime = (array) => {
  return array.toSorted((a, b) => a.totalTime - b.totalTime);
};

const countIngredients = (recipe) => {
  return recipe.ingredients.length;
};

const sortByMost = (array) => {
  return array.toSorted((a, b) => countIngredients(b) - countIngredients(a));
};
const sortByLeast = (array) => {
  return array.toSorted((a, b) => countIngredients(a) - countIngredients(b));
};

const toggleFilterDropdown = () => {
  if (filterDropdown.style.display === "block") {
    filterDropdown.style.display = "none";
  } else {
    filterDropdown.style.display = "block";
    sortDropdown.style.display = "none";
  }
};

const toggleSortDropdown = () => {
  if (sortDropdown.style.display === "block") {
    sortDropdown.style.display = "none";
  } else {
    sortDropdown.style.display = "block";
    filterDropdown.style.display = "none";
  }
};

const loadDocumentCloseListener = () => {
  document.addEventListener('click', e => {
    if (!filterDropdown.contains(e.target) && e.target !== filterMenuButton) {
      filterDropdown.style.display = "none";
    };

    if (!sortDropdown.contains(e.target) && e.target !== sortMenuButton) {
      sortDropdown.style.display = "none";
    }
  });
};


filterMenuButton.addEventListener('click', toggleFilterDropdown);
sortMenuButton.addEventListener('click', toggleSortDropdown);

document.getElementById('filtering-all').addEventListener('click', () => {
  getAllRecipes();
  getDefaultLinkText();
});


const getSubmenu = () => {
  const menuItems = document.querySelectorAll('li');
  let currentOpenSubmenu = null;

  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const submenu = item.querySelector('ul');
      //close other submenues if open
      if (currentOpenSubmenu && currentOpenSubmenu !== submenu) {
        currentOpenSubmenu.style.display = "none";
      }
      if (submenu) {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
        currentOpenSubmenu = submenu.style.display === "block" ? submenu : null;
      }
      e.stopPropagation();
    });
  });
};
getSubmenu();




//Check if the searchword is a word in the meat array
const checkForMeat = (recipe) => {
  return recipe.ingredients.some(ingredient => {
    return meat.some(meatWord =>
      ingredient.toLowerCase().includes(meatWord));
  });
};

//make eventListener on each menu word, and run filter functions
listItems.forEach(li => {
  if (li.classList.contains('submenu-item')) {
    li.addEventListener('click', () => {
      const currentSearchWord = li.innerHTML.toLowerCase();
      if (currentSearchWord === 'meat') {
        const filteredRecipes = recipes.filter(recipe => checkForMeat(recipe));
        currentDisplayedRecipes = filteredRecipes;  // Update currentDisplayedRecipes
        displayFilteredRecipes(filteredRecipes);
        document.getElementById('filter-dropdown').style.display = "none";
      } else {
        filterByIngredient(currentSearchWord);
        document.getElementById('filter-dropdown').style.display = "none";
      }
      getDefaultLinkText();
      resetOtherButtons();
    });
  }
});

const filterByIngredient = (currentSearchWord) => {
  currentDisplayedRecipes = recipes.filter(recipe => {
    return recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(currentSearchWord)
    );
  });
  displayFilteredRecipes(currentDisplayedRecipes);
  getDefaultLinkText();
  resetOtherButtons();
};


listItems.forEach(li => {
  if (li.classList.contains('submenu-item-c')) {
    li.addEventListener('click', () => {
      const currentSearchWord = li.innerHTML.toLowerCase();
      filterByCuisine(currentSearchWord);
      document.getElementById('filter-dropdown').style.display = "none";
    });
  }
});

const filterByCuisine = (currentSearchWord) => {
  currentDisplayedRecipes = recipes.filter(recipe => {
    const cuisines = Array.isArray(recipe.cuisineType) ? recipe.cuisineType : [recipe.cuisineType];
    return cuisines.some(cuisine =>
      cuisine.toLowerCase().includes(currentSearchWord)
    );
  });
  displayFilteredRecipes(currentDisplayedRecipes);
  getDefaultLinkText();
  resetOtherButtons();
};

//Sorting functions
sortByNameButton.addEventListener('click', (event) => {
  if (sortByNameButton.id === 'name') {
    const sortByName = () => {
      currentDisplayedRecipes.sort((a, b) => a.name.localeCompare(b.name));
    };
    sortByName();
    displaySortedRecipes(currentDisplayedRecipes);
    event.target.insertBefore(icon, event.target.firstChild);
    event.target.style = "padding-left: 0px;";
    sortByNameButton.id = 'activeName';
    resetOtherButtons(sortByNameButton);
  } else {
    getDefaultSorting();
    getDefaultLinkText();
    resetOtherButtons();
  };
});


sortByReverseButton.addEventListener('click', (event) => {
  if (sortByReverseButton.id === 'name-reverse') {
    const sortByName = () => {
      currentDisplayedRecipes.sort((a, b) => b.name.localeCompare(a.name));
    };
    sortByName();
    displaySortedRecipes(currentDisplayedRecipes);
    event.target.insertBefore(icon, event.target.firstChild);
    event.target.style = "padding-left: 0px;";
    sortByReverseButton.id = 'activeReverse';
    resetOtherButtons(sortByReverseButton);
  } else {
    getDefaultSorting();
    getDefaultLinkText();
    resetOtherButtons();
  };
});

sortByTimeButton.addEventListener('click', (event) => {
  if (sortByTimeButton.id === 'time') {
    const sortedRecipes = sortByTime([...currentDisplayedRecipes]);
    displaySortedRecipes(sortedRecipes);
    event.target.insertBefore(icon, event.target.firstChild);
    event.target.style = "padding-left: 0px;";
    sortByTimeButton.id = 'activeTime';
    resetOtherButtons(sortByTimeButton);
  } else {
    getDefaultSorting();
    getDefaultLinkText();
    resetOtherButtons();
  };
});

const sortByTimeDecend = (array) => {
  return array.toSorted((a, b) => b.totalTime - a.totalTime);
};

sortByDecendTimeButton.addEventListener('click', (event) => {
  if (sortByDecendTimeButton.id === 'time-decend') {
    const sortedRecipes = sortByTimeDecend([...currentDisplayedRecipes]);
    displaySortedRecipes(sortedRecipes);
    event.target.insertBefore(icon, event.target.firstChild);
    event.target.style = "padding-left: 0px;";
    sortByDecendTimeButton.id = 'activeDecend';
    resetOtherButtons(sortByDecendTimeButton);
  } else {
    getDefaultSorting();
    getDefaultLinkText();
    resetOtherButtons();
  }
});

sortByMostButton.addEventListener('click', (event) => {
  if (event.target.id === 'most-ingredients') {
    const sortedByMost = sortByMost([...currentDisplayedRecipes]);
    displaySortedRecipes(sortedByMost);
    sortByMostButton.id = 'activeSortByMost';
    event.target.insertBefore(icon, event.target.firstChild);
    event.target.style = "padding-left: 0px;";
    resetOtherButtons(sortByMostButton);
  } else {
    getDefaultSorting();
    getDefaultLinkText();
    resetOtherButtons();
  };
});

sortByLeastButton.addEventListener('click', (event) => {
  if (event.target.id === 'least-ingredients') {
    const sortedByLeast = sortByLeast([...currentDisplayedRecipes]);
    displaySortedRecipes(sortedByLeast);
    sortByLeastButton.id = 'activeSortByLeast';
    event.target.insertBefore(icon, event.target.firstChild);
    event.target.style = "padding-left: 0px;";
    resetOtherButtons(sortByLeastButton);
  } else {
    getDefaultSorting();
    getDefaultLinkText();
    resetOtherButtons();
  };
});

const searchRecipes = () => {
  const searchByInput = document.getElementById('searchbar').value.toLowerCase();
  const filterBySearch = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLocaleLowerCase().includes(searchByInput);
    const cuisines = Array.isArray(recipe.cuisineType) ? recipe.cuisineType : [recipe.cuisineType];
    const cuisineMatch = cuisines.some(cuisine =>
      cuisine.toLowerCase().includes(searchByInput)
    );
    const ingredientsMatch = recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(searchByInput)
    );
    return nameMatch || cuisineMatch || ingredientsMatch;
  })
  currentDisplayedRecipes = filterBySearch;
  displayFilteredRecipes(currentDisplayedRecipes);
  document.getElementById('searchbar').value = '';
};

document.getElementById('searchbar').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    searchRecipes();
  }
});



const generateContent = (recipes) => {
  return recipes.map(recipe => {
    return `
      <article class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}" />
        <h3>${recipe.name}</h3>
        <div class="divider-line"></div>
        <h4>Cuisine: ${recipe.cuisineType}</h4>
        <h4 class="cooking-time">Prep time: ${recipe.totalTime} minutes</h4>
        <div class="divider-line"></div>
        <h4 class="ingredients-header">Ingredients</h4>
        <ul id="html-list-${recipe.name.replace(/\s+/g, '-')}" class="ingredients-list">
          ${makeList(recipe.ingredients)}
        </ul>
        <h5>Source: <a href="${recipe.url}">${recipe.source}</a></h5>
      </article>
    `;
  }).join('');  // Join the array into a single string for HTML insertion
};

//Main library, all recipes displayed
const displayRecipes = () => {
  let recipeContent = generateContent(recipes);
  recipeContainer.innerHTML = recipeContent;
  recipeContainer.addEventListener('click', (event) => {
    // Check if the clicked element is an article
    const article = event.target.closest('article');
    if (article) {
      const recipeIndex = article.getAttribute('data-index');
      console.log('Article clicked using displayRecipes!', article);
      displaySelectedRecipe(recipeIndex);
    }
  });
  sortDropdown.style.display = "none";
};

const displaySelectedRecipe = () => {
  let recipeContent = '';
  recipes.forEach(recipe => {
    recipeContent += `
    <article class="recipe">
      <img src="${recipe.image}" alt="${recipe.name}" />
      <h3>${recipe.name}</h3>
      <div class="divider-line"></div>
      <h4>Cuisine: ${recipe.cuisineType}</h4>
      <h4 class="cooking-time">${recipe.totalTime} minutes</h4>
      <div class="divider-line"></div>
      <h4 class="ingredients-header">Ingredients</h4>
      <ul id="html-list-${recipe.name.replace(/\s+/g, '-')}" class="ingredients-list">
      ${makeList(recipe.ingredients)}
      </ul>
      <h5>Source: <a href="${recipe.url}">${recipe.source}</a></h5>
    </article>
  `;
  });
  document.getElementById('recipe-container').style.display = "none";
  document.getElementById('randomize-container').style.display = "block";
  document.getElementById('randomize-container').innerHTML = recipeContent;
  sortDropdown.style.display = "none";
};

//filter display
const displayFilteredRecipes = (filteredRecipes) => {
  let recipeContent = generateContent(filteredRecipes)
  document.getElementById('recipe-container').style.display = "grid";
  document.getElementById('randomize-container').style.display = "none";
  recipeContainer.innerHTML = recipeContent;

  recipeContainer.addEventListener('click', (event) => {
    // Check if the clicked element is an article
    const article = event.target.closest('article');
    if (article) {
      console.log('Article clicked!', article);
    }
  });
  sortDropdown.style.display = "none";
};

const displaySortedRecipes = (sortedRecipes = recipes) => {
  let recipeContent = generateContent(sortedRecipes);
  recipeContainer.innerHTML = recipeContent;
  sortDropdown.style.display = "none";
};


//Randomize-button
const randomRecipe = () => {
  document.getElementById('recipe-container').style.display = "none";
  document.getElementById('randomize-container').style.display = "block";
  const randomItem = recipes[Math.floor(Math.random() * recipes.length)];

  document.getElementById('randomize-container').innerHTML = `
      <article class="recipe">
      <img src="${randomItem.image}" alt="${randomItem.name}" />
      <h3>${randomItem.name}</h3>
      <div class="divider-line"></div>
      <h4>Cuisine: ${randomItem.cuisineType}</h4>
      <h4 class="cooking-time">${randomItem.totalTime} minutes</h4>
      <div class="divider-line"></div>
      <h4 class="ingredients-header">Ingredients</h4>
      <ul id="html-list-${randomItem.name.replace(/\s+/g, '-')}" class="ingredients-list">
      ${makeList(randomItem.ingredients)}
      </ul>
      <h5>Source: <a href="${randomItem.url}">${randomItem.source}</a></h5>
    </article>`
  sortDropdown.style.display = "none";
};

const getAllRecipes = () => {
  document.getElementById('recipe-container').style.display = "grid";
  document.getElementById('randomize-container').style.display = "none";
  displayRecipes();
  sortDropdown.style.display = "none";
};



