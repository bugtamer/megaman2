import { TestBed } from '@angular/core/testing';

import { AsciiParserService } from './ascii-parser.service';

describe('AsciiParserService', () => {
  let service: AsciiParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsciiParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('numberCharCodeToNumber(49) should return 1', () => {
    const sut = service.numberCharCodeToNumber(49);
    expect(sut).toEqual(1);
  });

  it(`letterCharCodeToNumber(65) should return 1`, () => {
    const sut = service.letterCharCodeToNumber(65);
    expect(sut).toEqual(1);
  });

  it('numberToCharCode(1) should return 49', () => {
    const sut = service.numberToCharCode(1);
    expect(sut).toEqual(49);
  });

  it(`letterToCharCode('A') should return 65`, () => {
    const sut = service.letterToCharCode('A');
    expect(sut).toEqual(65);
  });

});
