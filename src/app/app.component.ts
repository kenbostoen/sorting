import { Component, ViewChild } from '@angular/core';
import { VisualiserComponent } from './visualiser/visualiser.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sortingAlgorithms';
  @ViewChild(VisualiserComponent, {static: false}) vis:VisualiserComponent;

  arraySize = 20;
  setArraySize(event) {
    this.vis.replaceSortingArray(event);
  }
  sort() {
    this.vis.sort();
  }
}
