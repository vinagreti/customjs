import { CustomCepMaskPipe } from './custom-cep-mask.pipe';

describe('CustomCepMaskPipe', () => {
  const emptyCep = '';
  const cepSmallerLength = '1234';
  const cepGreaterLength = '123456789';
  const cepMock = '12345678';

  it('create an instance', () => {
    const pipe = new CustomCepMaskPipe();
    expect(pipe).toBeTruthy();
  });

  it('create should transform', () => {
    // given
    const pipe = new CustomCepMaskPipe();
    const expected = '12345-678';
    // when
    const result = pipe.transform(cepMock);
    // then
    expect(result).toEqual(expected);
  });

  it('create should not transform empty string', () => {
    // given
    const pipe = new CustomCepMaskPipe();
    const expected = '';
    // when
    const result = pipe.transform(emptyCep);
    // then
    expect(result).toEqual(expected);
  });

  it('create should not transform string with lenght smaller than 5', () => {
    // given
    const pipe = new CustomCepMaskPipe();
    const expected = cepSmallerLength;
    // when
    const result = pipe.transform(cepSmallerLength);
    // then
    expect(result).toEqual(expected);
  });

  it('create should transform string with lenght greater than 11', () => {
    // given
    const pipe = new CustomCepMaskPipe();
    const expected = '12345-678';
    // when
    const result = pipe.transform(cepGreaterLength);
    // then
    expect(result).toEqual(expected);
  });

  it('create should return empty string if value is undefined', () => {
    // given
    const pipe = new CustomCepMaskPipe();
    const expected = emptyCep;
    // when
    const result = pipe.transform(undefined);
    // then
    expect(result).toEqual(expected);
  });
});
