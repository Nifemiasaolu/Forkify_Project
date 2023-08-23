import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
// Polyfill is used to provide modern functionality for older browsers.
// Core-Js => For Polyfilling everything else(
// Regenerator-runtime => For Polyfilling Async/Await
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError()
  }
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
}
init();

// window.addEventListener('hashchange', controlRecips);
// window.addEventListener('load', showRecipe);
