import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/animal.model'

@Component({
  selector: 'update-animal',
  templateUrl: '../templates/update-animal.component.html',
  styleUrls: ['../app.component.css']
})
export class UpdateAnimalComponent {
  @Input() childAnimal: Animal;
  @Output() finishedUpdatingSender = new EventEmitter();
  
  finishedUpdatingButton() {
    this.finishedUpdatingSender.emit();
  }
}
