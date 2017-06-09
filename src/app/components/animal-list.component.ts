import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/animal.model'

@Component({
  selector: 'animal-list',
  templateUrl: '../templates/animal-list.component.html',
  styleUrls: ['../app.component.css']
})
export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() updateAnimalClick = new EventEmitter();

  updateAnimal(animal){
    this.updateAnimalClick.emit(animal);
  }
}
