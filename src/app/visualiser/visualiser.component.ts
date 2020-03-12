import { Component, OnInit, AfterViewInit, Input, EventEmitter, Output } from '@angular/core';
import { SortService } from '../sort.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent {
  sortingArray = [];
  MAXHEIGHT = Math.max(...this.sortingArray);
  highlighted = [];
  swapping = false;
  @Output() visualisingEmitter = new EventEmitter();

  constructor(private sortService: SortService) {
    this.replaceSortingArray(50);
  }

  replaceSortingArray(size: number) {
    this.sortingArray = [];
    for (let i = 0; i < size; i++) {

      this.sortingArray.push(Math.round(Math.random() * 200))
    }

    this.MAXHEIGHT = Math.max(...this.sortingArray)
  }

  sort() {
    const animations = this.sortService.sort(this.sortingArray.slice());
    let i = 0;
    this.visualisingEmitter.emit(true);
    const int = interval(30).subscribe(() => {
      if (i < animations.length) {
        this.sortingArray = animations[i].array;
        this.highlighted = [animations[i].barA, animations[i].barB];
        this.swapping = animations[i].swapping;
        i++;
      } else {
        this.visualisingEmitter.emit(false);
        int.unsubscribe();
      }

    });
  }
}
