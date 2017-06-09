import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from '../models/animal.model';

@Pipe({
  name: 'agePipe',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], ageCondition) {
    var output: Animal[] = [];
    if(ageCondition==='<=2'){
      for(var i=0;i<input.length;i++){
        if(input[i].age<=2){
          output.push(input[i]);
        }
      }
    }
    else if(ageCondition==='>2'){
      for(var i=0;i<input.length;i++){
        if(input[i].age>2){
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
