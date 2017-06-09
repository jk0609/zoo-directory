import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/animal.model'

@Component({
  selector: 'animal-list',
  templateUrl: '../templates/animal-list.component.html',
  styleUrls: ['../app.component.css']
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Input() caretakerTotal: number;
  @Output() updateAnimalClick = new EventEmitter();

  ageCondition: 'all';
  dietCondition: 'all';
  // totalCaretakers = 0;

  updateAnimal(animal){
    this.updateAnimalClick.emit(animal);
  }

  onAgeChange(option){
    this.ageCondition = option;
  }
  onDietChange(option){
    this.dietCondition = option;
  }
}
