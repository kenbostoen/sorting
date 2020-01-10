import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() sliderValueEmitter = new EventEmitter();
  @Output() sortEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    var slider = document.getElementById("arraySize");      
  slider.oninput = () => {
    this.sliderValueEmitter.emit(slider['value']); 
    }
  }
  sort(){
    console.log('pre emmit');
    
    this.sortEmitter.emit();
  }

}
