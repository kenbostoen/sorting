import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuickSortService } from './quick-sort.service';
import { SortAnimation } from './model/SortAnimation';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  constructor(private quicksort: QuickSortService) { }

  sort(array: number[]): SortAnimation[] {
    let copyArray = array;
    let low = 0;
    let high = array.length - 1;
    return this.quicksort.startSort(copyArray, low, high);
  }

  
}
