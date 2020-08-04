import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private httpClient: HttpClient) { }

  private recipeUrl = 'http://10.0.1.153:8080/api/v1/recipes';

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.recipeUrl);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${this.recipeUrl}/${id}`);
  }

  postRecipe(body: FormData): Observable<string> {
    return this.httpClient.post<string>(this.recipeUrl, body);
  }

}
