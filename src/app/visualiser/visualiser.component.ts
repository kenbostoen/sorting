import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SortService } from '../sort.service';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent {
  sortingArray = [];
  MAXHEIGHT = Math.max(...this.sortingArray);
  highlighted = [];

  constructor(private sortService: SortService) {
    this.replaceSortingArray(50);
    this.sortService.highlightSubject.subscribe((numbers: number[]) => {
      console.log(this.highlighted);
      numbers.forEach(element => {
        this.highlighted.push(element);
        setTimeout(() => {
          this.highlighted.splice(this.highlighted.indexOf(element));
          this.highlighted = numbers;
        }, 100);
      });
    });
  }
  
 replaceSortingArray(size: number){
      this.sortingArray = [];
      for(let i = 0; i<size; i++) {
      console.log(this.sortingArray);

      this.sortingArray.push(Math.round(Math.random() * 200))
    }
    console.log(this.sortingArray);

    this.MAXHEIGHT = Math.max(...this.sortingArray)
  }

  sort() {
    console.log('sorting');
    this.sortService.sort(this.sortingArray).subscribe((array: number[]) => {
      if (array != this.sortingArray) {
        console.log(array);
        this.sortingArray = array;
      }
    });
  }
}
