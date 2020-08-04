import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
        // Handle result
        this.recipes = result;
      },
      (error) => {
        // Handle errors
      }
    );
  }

  onDelete(id: number) {

    console.log();

    var indexOfEntryOfId = this.recipes.map(recipe => recipe.id).indexOf(id); // yes
    this.recipes.splice(indexOfEntryOfId, 1);
  }

}
