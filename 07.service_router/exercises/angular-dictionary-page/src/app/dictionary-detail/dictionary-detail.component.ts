import {Component, OnInit} from '@angular/core';

import {DictionaryService} from "../serivce/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  vietnameseMean: any;

  constructor(private dictionaryService: DictionaryService,
              private activatedRouter: ActivatedRoute) {
    // const wordFromURL = this.activatedRouter.snapshot.params.englishWord;
    // this.vietnameseMean = this.dictionaryService.findKeyWord(wordFromURL);

  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) =>{
      const englishWord = paramMap.get('englishWord');
      // @ts-ignore
      this.vietnameseMean = this.dictionaryService.findKeyWord(englishWord);
    })
  }

}
