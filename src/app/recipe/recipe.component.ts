import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  @Input() recipe: Recipe;

  isExpanded: boolean = false;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  deleteOnClick(id: string) {
    this.recipeService.deleteRecipe(id).subscribe(
      {
        next: id => console.log(id),
        error: error => console.error('There was an error!', error)
      })
  }
}