import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../img/icons.svg'; // Parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// console.log(icons);

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

//////////////////////////////////////////////////////////////
const renderSpinner = function (parentElement) {
  const markUp = `
    <div class="spinner">
    <svg>
    <use href="${icons}#icon-loader"></use>
    </svg>
    </div>
    `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    // 1). Loading recipe
    renderSpinner(recipeContainer);
    // const res = await fetch(
    //   ` https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    // );
    // const data = await res.json();

    // if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    // let { recipe } = data.data;
    // recipe = {
    //   id: recipe.id,
    //   tittle: recipe.tittle,
    //   publisher: recipe.publisher,
    //   sourceUrl: recipe.source_url,
    //   image: recipe.image_url,
    //   servings: recipe.servings,
    //   cookngTime: recipe.cookng_time,
    //   ingredients: recipe.ingredients,
    // };
    console.log(recipe);
    // 2). Rendering recipe
    const markup = `
      <figure class="recipe__fig">
      <img src="${recipe.image} alt="${recipe.title} "class="recipe__img" />
      <h1 class="recipe__tittle">
      <span>${recipe.title}</span>
      </h1>
      </figure>

      <div class="recipe__details">
      <div class="recipe__info">
      <svg class="recipe__info-icon">
      <use href="p25.jpg"></use>
      </svg>

      <span class="recipe__info-data  recipe__info-data--minutes">${
        recipe.cookngTime
      }</span>
      <span class="recipe__info-text">minutes</span>
      </div>

      <div class="recipe__info">
       <svg class="recipe__info-icon">
       <use href="${icons}#icon-minus-circle"></use>
       </svg>

        <span class="recipe__info-data  recipe__info-data--people">${
          recipe.servings
        }</span>
         <span class="recipe__info-text">servings</span>

         <div class="recipe__info-buttons">
         <button class="btn--tiny btn--increase--servings"

          <svg class="recipe__info-icon">
       <use href="${icons}#icon-minus-circle"></use>
       </svg>
       </button>

          <button class="btn--tiny btn--increase--servings">

          <svg class="recipe__info-icon">
       <use href="${icons}#icon-plus-circle"></use>
       </svg>
       </button>
       </div>
       </div>

       <div class="recipe__user-generated">
        <svg class="recipe__info-icon">
       <use href="${icons}icon-plus-circle"></use>
       </svg>
       </div>

       <button class="btn--round">
        <svg class="recipe__info-icon">
       <use href="${icons}#icon-plus-circle"><use>
       </svg>
       </button>
       </div>

       <div class="recipe__ingredients">
       <h2 class="heading--2">Recipe ingredients</h2>

       <ul class="recipe__ingredients-list"> 
       
       ${recipe.ingredients
         .map(ing => {
           return `
           <li class="recipe__ingredient">
        <svg class="recipe__info-icon">
       <use href="${icons}#icon-plus-circle"><use>
       </svg>
       <div class="recipe__quantity">${ing.quantity}</div>
       <div class="recipe__description">
       <span class="recipe__unit">${ing.unit}</span>${ing.description}
       </div>
       </li>
        `;
         })
         .join('')}

     

         <li class="recipe__ingredient">
        <svg class="recipe__icon">
       <use href="${icons}#icon-check"><use>
       </svg>
       <div class="recipe__quantity">0.5</div>
       <div class="recipe__description">
       <span class="recipe__unit">cup</span>ricotta cheese
       </div>
       </li>
       </ul>
       </div>

       <div class="recipe__directions">
       <h2 class="heading--2">How to cook it</h2>
       <p class="recipe__directions-text">
       This recipe was carefully designed and tested by
       <span class="recipe__publisher">${
         recipe.publisher
       }</span>. please check out directions at there website.</p>

       <a class="btn--small recipe__btn">
       href="${recipe.sourceUrl}"
       target="_blank">

       <span>Directions</span>
        <svg class="recipe__icon">
       <use href="src/img/icons.svg#icon-arrow-right"><use>
       </svg>
       </a>
       </div>
       
    `;
    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
