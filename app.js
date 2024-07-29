import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//Get all Recipes
app.get('/api/recipes', (req, res) => {
  res.json({success: true, payload: recipes});
});

//Get recipes with particular id(if it exists)
app.get('/api/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.json))
  res.json({success: true, payload:recipe});
});
// Create a new recipe
app.post('/api/recipes', (req, res) => {
  const newRecipe = req.body;
  // Add your logic to create a new recipe
  // ...
  res.json({ success: true, payload: newRecipe });
});

// Update a recipe by ID
app.put('/api/recipes/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const updatedRecipe = req.body;
  // Add your logic to update the recipe with the given ID
  // ...
  res.json({ success: true, payload: updatedRecipe });
});

// Delete a recipe by ID
app.delete('/api/recipes/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  // Add your logic to delete the recipe with the given ID
  // ...
  res.json({ success: true });
});
