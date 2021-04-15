
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments("recipe_id")
        tbl.string('recipe_name', 128)
            .unique()
            .notNullable()
    })
    .createTable('steps', tbl => {
      tbl.increments("step_id")
      tbl.integer('step_order')
            .unsigned()
            .notNullable()
      tbl.string("step_instructions")
            .notNullable()
      tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipe_id")
            .inTable("recipes")
            .onDelete("CASCADE")
    })
    .createTable('ingredients', tbl => {
      tbl.increments("ingredient_id")
      tbl.string("ingredient_name")
            .notNullable()
    })
    .createTable('ingredients_for_steps', tbl => {
      tbl.increments("ing_step_connection_id")
      tbl.string("quantity")
            .notNullable()
      tbl.integer("step_id")
            .unsigned()
            .notNullable()
            .references("step_id")
            .inTable("steps")
            .onDelete("CASCADE")
      tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredient_id")
            .inTable("ingredients")
            .onDelete("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("ingredients_for_steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("steps")
  .dropTableIfExists("recipes")
};
