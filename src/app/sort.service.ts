import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuickSortService } from './quick-sort.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  highlightSubject = new Subject<number[]>();

  constructor(private quicksort: QuickSortService) { }

  sort(array: number[]): Observable<number[]> {

    const sub = new Subject<number[]>();
    let copyArray = array;
    let low = 0;
    let high = array.length - 1;

    this.quicksort.sort(copyArray, low, high, sub, this.highlightSubject);
    return sub;
  }

  
}
