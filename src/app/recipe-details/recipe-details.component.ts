import { RecipeService } from './../recipe.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    var idString = this.activatedRoute.snapshot.paramMap.get('id');
    if (!isNaN(Number(idString))) {
      this.id = Number(idString);
    } else {
      console.log('Not a Number');
    }

    this.getRecipe(this.id);
  }

  getRecipe(id: number): void {
    this.recipeService.getRecipe(id).subscribe(
      (result: Recipe) => {
        this.recipe = result;
      },
      (error) => {
        // Handle errors
      }
    );
  }
}