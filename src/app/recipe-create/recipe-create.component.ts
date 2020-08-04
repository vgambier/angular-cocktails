import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})

export class RecipeCreateComponent implements OnInit {

  formGroup;

  constructor(private recipeService: RecipeService, private formBuilder: FormBuilder, private httpClient: HttpClient) {

    this.formGroup = this.formBuilder.group({
      name: '',
      picture: '',
      description: ''
    });
  }

  onSubmit(formData: FormData) {
    this.recipeService.postRecipe(formData).subscribe(
      {
        next: data => console.log(data),
        error: error => console.error('There was an error!', error)
      })
  }

  ngOnInit(): void {
  }

}
