import {Component, OnInit} from '@angular/core';
import {Word} from "../model/word";
import {DictionaryService} from "../serivce/dictionary.service";

@Component({
  selector: 'app-dictionary-search',
  templateUrl: './dictionary-search.component.html',
  styleUrls: ['./dictionary-search.component.css']
})
export class DictionarySearchComponent implements OnInit {
  dictionary: Word[] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

   getAll() {
    this.dictionary= this.dictionaryService.getAll();
  }
}
