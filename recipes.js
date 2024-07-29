/*
Node module imports
*/
import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

/*
Global variables
*/
const fileName = 'recipes.json';

/*
Helper functions
*/
// Function to read data from a JSON file.
async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

// Function to write data to a JSON file.
async function writeJsonFile(filePath, data) {
  try {
    const stringifiedData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, stringifiedData);
    console.log('File written successfully!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

/*
JavaScript ES module functions
Contains (and exports) all of the logic that interacts with the recipe collection.
*/
// Get all recipes.
export async function getRecipes() {
  // Read JSON data (an array of recipe object) from the recipes.json file and store it in a variable.
  const data = await readJsonFile('recipes.json');
  // console.log('Data from file:', data); // Debug code.

  // Return the JSON data.
  return data;
}

// Get a recipe by ID.
export async function getRecipeByID(id) {}

// Create a recipe.
export async function createRecipe(newRecipe) {}

// Update a recipe by ID.
export async function updateRecipeByID(id, updatedRecipe) {}

// Delete a recipe by ID.
export async function deleteRecipeByID(id) {}

/*
Test code
*/
// Test code to run the modules above.
// getRecipes();
