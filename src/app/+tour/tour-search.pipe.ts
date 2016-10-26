import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tourSearch'
})
export class TourSearch implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("this is args");
    console.log(args);
    let filter = args.toLocaleLowerCase();
    return filter ? value.filter(t=> t.city.toLocaleLowerCase().indexOf(filter) != -1) : value;
    //return value;

  }

}
