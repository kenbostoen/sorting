import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent {
  sortingArray = [];
  MAXHEIGHT = Math.max(...this.sortingArray)
  constructor(){
    this.replaceSortingArray(50);
  }
  
 replaceSortingArray(size: number){
   this.sortingArray = [];
   for (let i = 0; i < size; i++) {
      this.sortingArray.push(Math.random() * 200)
   }
   this.MAXHEIGHT = Math.max(...this.sortingArray)
 }
}
