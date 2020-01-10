import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
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

  constructor(private sortService: SortService) {
    this.replaceSortingArray(50);
  }
  
 replaceSortingArray(size: number){
      this.sortingArray = [];
      for(let i = 0; i<size; i++) {

      this.sortingArray.push(Math.round(Math.random() * 200))
    }

    this.MAXHEIGHT = Math.max(...this.sortingArray)
  }

  sort() {
    const animations = this.sortService.sort(this.sortingArray.slice());
    console.log(animations);
    let i = 0;
    interval(30).subscribe(() => {
      this.sortingArray = animations[i].array;
      this.highlighted = [animations[i].barA, animations[i].barB]
        this.swapping = animations[i].swapping
      i++;
    });
  }
}
