import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe(
      'Testy Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://p0.pxfuel.com/preview/852/655/759/quinoa-seeds-proper-nutrition-a-healthy-lifestyle.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'A test Recipe 2',
      'This is simply a test This is simply a test',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_960_720.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
