import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  imports: [CommonModule, FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  @Input() fruit = {
    name: "",
    img: "",
    description: "",
    genus: "",
    stars: 0,
    reviews: [
      {
        name: "",
        text: ""
      }],
  }
  inputData = "";

  @Output() fruitName = new EventEmitter<string>();

  sendInputData() {
    this.fruitName.emit(this.inputData);
    this.inputData="";
  }
}
