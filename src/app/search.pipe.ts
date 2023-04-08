import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:any[],searchWord:string):any[] {
    return data.filter((data)=>data.first_name.toLowerCase().includes(searchWord.toLowerCase())|| data.last_name.toLowerCase().includes(searchWord.toLowerCase())|| data.email.toLowerCase().includes(searchWord.toLowerCase()));
  }

}
