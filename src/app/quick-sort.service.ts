import { Injectable } from '@angular/core';
import { SortAnimation } from './model/SortAnimation';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {
  animations: SortAnimation[] = [];
  sort(items:number[], left, right): SortAnimation[] {
    var index;
    if (items.length > 1) {
      index = this.partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
        this.sort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
        this.sort(items, index, right);
      }
    }    
    return this.animations;
  }
  partition(items: number[], left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
        this.animations.push(new SortAnimation(i, j, items.slice(), false))
      }
      while (items[j] > pivot) {
        j--;
        this.animations.push(new SortAnimation(i, j, items.slice(), false))
      }
      if (i <= j) {
        this.swap(items, i, j); //swap two elements
        this.animations.push(new SortAnimation(i, j, items.slice(), true))
        i++;
        j--;
      }
    }
    return i;
  }
  swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
}
