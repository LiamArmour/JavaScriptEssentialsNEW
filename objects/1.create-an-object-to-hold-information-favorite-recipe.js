'use strict';
function recipe(title, servings, ingredients) {
    this.recipeTitle = title;
    this.recipeServings = servings;
    this.recipeIngredients = ingredients;
}

var stickyToffeePudding = new recipe("Sticky Toffee Pudding", 4, ['toffee pudding', 'toffee']);
