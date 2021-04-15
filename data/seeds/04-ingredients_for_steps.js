
exports.seed = function(knex) {
  return knex('ingredients_for_steps').insert([
    {quantity: '1', step_id:1, ingredient_id:1},
    {quantity: '2', step_id:3, ingredient_id:2},
    {quantity: '3', step_id:5, ingredient_id:3},
    {quantity:'100%', step_id:1, ingredient_id:4},
    {quantity:'110%', step_id:2, ingredient_id:4},
    {quantity:'100%', step_id:3, ingredient_id:4},
    {quantity:'110%', step_id:4, ingredient_id:4},
    {quantity:'100%', step_id:5, ingredient_id:4},
    {quantity:'110%', step_id:6, ingredient_id:4}
  ]);
};
