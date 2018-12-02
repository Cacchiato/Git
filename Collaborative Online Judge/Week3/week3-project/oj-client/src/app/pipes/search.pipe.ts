import { Pipe, PipeTransform } from '@angular/core';
import { Problem } from '../models/problem.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(problems: Problem[], term: string): Problem[] {
    console.log(problems);
    console.log(term);
    term = term.toLocaleLowerCase();
    return problems.filter(problem => {
      if(problem.difficulty.toLocaleLowerCase().includes(term)) {
        return true;
      } else if(problem.name.toLocaleLowerCase().includes(term)) {
        return true;
      } else {
        return false;
      }
    });
  }
}
