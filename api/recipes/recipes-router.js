const Recipes = require('./recipes-model.js');
const router = require('express').Router()

router.get('/:id', (req, res) => {
    Recipes.getRecipeById(req.params.id)
            .then(recipe => {
                res.status(200).json(recipe)
            })
            .catch(err => {
                res.status(500).json({message: err.message})
            })
})

module.exports = router;