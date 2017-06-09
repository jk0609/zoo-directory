import { Component } from '@angular/core';
import { Animal } from './models/animal.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  animals: Animal[]=[
    new Animal('Steve', 3, 'Carnivore', 'Reptile House', 4, 'Male', 'Mice', 'Cold temperature'),
    new Animal('Bob', 2, 'Herbivore', 'Some Place', 8, 'Male', 'Toys', 'Swimming'),
    new Animal('Peanut', 1, 'Omnivore', 'Some Other Place', 2, 'Female', 'Nickelback', 'Manually creating database entries'),
  ];
  selectedAnimal = null;

  updateAnimal(animal){
    this.selectedAnimal = animal;
  }

}
