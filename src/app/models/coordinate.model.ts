export type AsciiDecimalCode = number;

export type XRange = 'A' | 'B' | 'C' | 'D' | 'E';
export type YRange =  1  |  2  |  3  |  4  |  5;

export class Coordinate {

  public static readonly Y_MIN = 1;
  public static readonly Y_MAX = 5;

  private xCharCode: AsciiDecimalCode;
  private yCharCode: AsciiDecimalCode;

  constructor(x: XRange, y: YRange) {
    this.xCharCode = this.letterToCharCode(x);
    this.yCharCode = this.numberToCharCode(y);
  }
  
  get xy(): string { return String.fromCharCode(this.xCharCode, this.yCharCode); }
  get x():  string { return String.fromCharCode(this.xCharCode); }
  get y():  number { return this.numberCharCodeToNumber(this.yCharCode); }

  get toIndex(): number {
    const x = this.numberCharCodeToNumber(this.xCharCode);
    const y = this.letterCharCodeToNumber(this.yCharCode);
    const rowNumber = this.numberCharCodeToNumber(this.xLastRowCharCode);
    return rowNumber * y + x;
  }

  next(): void {
    if (this.isEtankUpperLimit) {
      this.yCharCode = this.yFirstColumCharCode;
      return;
    }
    if (this.isBossUpperLimit) {
      this.xCharCode = this.xSecondRowCharCode;
      this.yCharCode = this.yFirstColumCharCode;
      return;
    }
    if (this.isLastColumn) {
      this.xCharCode++;
      this.yCharCode = this.yFirstColumCharCode;
    } else {
      this.yCharCode++;
    }
  }

  previous(): void {
    if (this.isEtankLowerLimit) {
      this.yCharCode = this.yLastColumCharCode;
      return;
    }
    if (this.isBossLowerLimit) {
      this.xCharCode = this.xLastRowCharCode;
      this.yCharCode = this.yLastColumCharCode;
      return;
    }
    if (this.isFirstColumn) {
      this.xCharCode--;
      this.yCharCode = this.yLastColumCharCode;
    } else {
      this.yCharCode--;
    }
  }

  // LOWER LEVEL IMPLEMENTATION DETAILS

  private get isEtankLowerLimit(): boolean { return this.isFirstRow && this.isFirstColumn; }
  private get isEtankUpperLimit(): boolean { return this.isFirstRow && this.isLastColumn;  }

  private get isBossLowerLimit(): boolean { return this.isSecondRow && this.isFirstColumn; }
  private get isBossUpperLimit(): boolean { return this.isLastRow   && this.isLastColumn;  }

  private get isFirstRow():  boolean { return this.xCharCode === this.xFirstRowCharCode;  }
  private get isSecondRow(): boolean { return this.xCharCode === this.xSecondRowCharCode; }
  private get isLastRow():   boolean { return this.xCharCode === this.xLastRowCharCode;   }

  private get isFirstColumn(): boolean { return this.yCharCode === this.yFirstColumCharCode; }
  private get isLastColumn():  boolean { return this.yCharCode === this.yLastColumCharCode;  }

  private get xFirstRowCharCode():  AsciiDecimalCode { return this.letterToCharCode('A'); }
  private get xSecondRowCharCode(): AsciiDecimalCode { return this.letterToCharCode('B'); }
  private get xLastRowCharCode():   AsciiDecimalCode { return this.letterToCharCode('E'); }

  private get yFirstColumCharCode(): AsciiDecimalCode { return this.numberToCharCode(Coordinate.Y_MIN); }
  private get yLastColumCharCode():  AsciiDecimalCode { return this.numberToCharCode(Coordinate.Y_MAX); }

  private numberCharCodeToNumber(number: AsciiDecimalCode) :number {
    const numberOffset = this.numberToCharCode(0);
    return number - numberOffset;
  }

  private letterCharCodeToNumber(letter: AsciiDecimalCode) :number {
    const letterOffset = this.letterToCharCode('A') - 1;
   return letter - letterOffset;
  }

  private numberToCharCode(singleDigit: number): AsciiDecimalCode {
    return this.letterToCharCode( `${singleDigit}` );
  }

  private letterToCharCode(singleLetter: string): AsciiDecimalCode {
    const firstChar = 0;
    return singleLetter.charCodeAt(firstChar);
  }

}
