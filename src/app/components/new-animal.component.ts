import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/animal.model'

@Component({
  selector: 'new-animal',
  templateUrl: '../templates/new-animal.component.html',
  styleUrls: ['../app.component.css']
})
export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  finishedNewButton(name, age, diet, location, caretakers, sex, likes, dislikes){
    var newAnimal: Animal = new Animal(name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
