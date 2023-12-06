import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework';
  programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++'];
  experienceLevels = ['Beginner', 'Intermediate', 'Advanced'];

  textarea = '';
  submit = false;


  
  OnSubmit() {
    this.submit = true;
  }
 



}
