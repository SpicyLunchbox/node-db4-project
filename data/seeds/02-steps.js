
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_order: '1', step_instructions: 'make tacos', recipe_id: 1  },
    {step_order: '2', step_instructions: 'profit', recipe_id: 1  },
    {step_order: '1', step_instructions: 'make sushi', recipe_id: 2  },
    {step_order: '2', step_instructions: 'profit', recipe_id: 2  },
    {step_order: '1', step_instructions: 'cook omelette', recipe_id: 3  },
    {step_order: '2', step_instructions: 'profit', recipe_id: 3  },
  ]);
};
