import { Injectable } from '@angular/core';
import { AsciiDecimalCode } from 'src/app/models/coordinate.model';

@Injectable({
  providedIn: 'root'
})
export class AsciiParserService {

  numberCharCodeToNumber(number: AsciiDecimalCode) :number {
    const numberOffset = this.numberToCharCode(0);
    return number - numberOffset;
  }

  letterCharCodeToNumber(letter: AsciiDecimalCode) :number {
    const letterOffset = this.letterToCharCode('A') - 1;
   return letter - letterOffset;
  }

  numberToCharCode(singleDigit: number): AsciiDecimalCode {
    return this.letterToCharCode( `${singleDigit}` );
  }

  letterToCharCode(singleLetter: string): AsciiDecimalCode {
    const firstChar = 0;
    return singleLetter.charCodeAt(firstChar);
  }

}
