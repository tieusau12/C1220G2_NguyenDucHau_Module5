import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker-editor',
  templateUrl: './color-picker-editor.component.html',
  styleUrls: ['./color-picker-editor.component.css']
})
export class ColorPickerEditorComponent implements OnInit {
  color1: string = 'red';
  color2: string = 'blue';
  constructor() {
  }
  ngOnInit(): void {
  }
}
