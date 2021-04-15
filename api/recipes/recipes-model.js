const db = require('../../data/dbConfig.js');

function getRecipeById(recipe_id) {
    return db('recipes')
        .join('steps','steps.recipe_id','recipes.recipe_id')
        .join('ingredients_for_steps','ingredients_for_steps.step_id','steps.step_id')
        .join('ingredients',"ingredients.ingredient_id",'ingredients_for_steps.ingredient_id')
        .select('recipes.recipe_id as ID', 'recipes.recipe_name as Recipe','steps.step_id as stepID','steps.step_order as stepOrder','steps.step_instructions as Instructions','ingredients.ingredient_name as Ingredient')
        .where('recipe_id',recipe_id).first()
}

// getRecipeById(recipe_id)
// Should resolve a representation of the recipe similar to the one shown in the Data Model above.
// The function will pull information from several tables using Knex and then create a response object using loops, objects, array methods etc.
// There are many ways to solve this, but from a performance standpoint the fewer trips to the database the better!

module.exports = {
getRecipeById
}