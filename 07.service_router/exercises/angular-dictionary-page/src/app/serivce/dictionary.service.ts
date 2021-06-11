import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [{
    englishWord: 'table',
    vietnameseMean: 'cái bàn'
  },
    {
      englishWord: 'hello',
      vietnameseMean: 'xin chào'
    },
    {
      englishWord: 'love',
      vietnameseMean: 'yêu'
    }];

  constructor() {
  }

  getAll() {
    return this.words;
  }

  findKeyWord(englishWord: string){
    console.log(englishWord);
    return this.words.find(word => word.englishWord === englishWord);

  }
}
