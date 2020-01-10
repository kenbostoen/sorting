import { Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }
  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  sort(array: number[]): Observable<number[]> {
    
    const sub = new Subject<number[]>();
    let copyArray = array;
    let low = 0;
    let high = array.length - 1;
    
    this.quickSort(copyArray, low, high, sub);
    return sub;
  }
 
  quickSort(items, left, right, sub) {
    this.sleep(100).then(() => {

    var index;
    if (items.length > 1) {
        index = this.partition(items, left, right, sub); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            this.quickSort(items, left, index - 1, sub);
        }
        if (index < right) { //more elements on the right side of the pivot
            this.quickSort(items, index, right, sub);
        }
    }    
    return items;
  });

}
  partition(items, left, right, sub) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            this.swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    sub.next(items)
    return i;
}
  swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
}
