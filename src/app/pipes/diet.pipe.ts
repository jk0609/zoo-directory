import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from '../models/animal.model';

@Pipe({
  name: 'dietPipe',
  pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Animal[], dietCondition) {
    var output: Animal[] = [];
    if(dietCondition==='Meat Eaters'){
      for(var i=0;i<input.length;i++){
        if(input[i].diet==='Omnivore'||input[i].diet==='Carnivore'){
          output.push(input[i]);
        }
      }
    }
    else if(dietCondition==='Not Meat Eaters'){
      for(var i=0;i<input.length;i++){
        if(input[i].diet==='Herbivore'){
          output.push(input[i]);
        }
      }
    }
    else{
      return input;
    }
    return output;
  }
}
