
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'tacos'},
    {recipe_name: 'sushi'},
    {recipe_name: 'omelette'}
  ]);
};
