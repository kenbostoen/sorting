import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickSortService {
  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  sort(items, left, right, sub, highlight) {
    this.sleep(1000).then(() => {
      var index;
      if (items.length > 1) {
        index = this.partition(items, left, right, sub, highlight); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
          this.sort(items, left, index - 1, sub, highlight);
        }
        if (index < right) { //more elements on the right side of the pivot
          this.sort(items, index, right, sub, highlight);
        }
      }
      return items;
    });

  }
  partition(items, left, right, sub, highlight) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
       // highlight.next([i, j]);
      }
      while (items[j] > pivot) {
        j--;
       // highlight.next([i, j]);
      }
      if (i <= j) {
        this.swap(items, i, j); //swap two elements
        i++;
        j--;
        sub.next(items);
        highlight.next([i, j]);
      }
    }
   // highlight.next([i, j]);
    sub.next(items);
    return i;
  }
  swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
}
