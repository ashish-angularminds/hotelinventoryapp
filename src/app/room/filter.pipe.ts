import { Pipe, PipeTransform } from '@angular/core';
import { room } from './room';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: room[], price: number): room[] {
    return rooms.filter((room) => room.price > price);
  }

}
