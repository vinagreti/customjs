import { CustomCpfMaskPipe } from './custom-cpf-mask.pipe';

describe('CustomCpfMaskPipe', () => {
  const emptyCpf = '';
  const cpfSmallerLength = '111';
  const cpfGreaterLength = '111111111111';
  const cpfMock = '11111111111';

  it('create an instance', () => {
    const pipe = new CustomCpfMaskPipe();
    expect(pipe).toBeTruthy();
  });

  it('create should transform', () => {
    // given
    const pipe = new CustomCpfMaskPipe();
    const expected = '111.111.111-11';
    // when
    const result = pipe.transform(cpfMock);
    // then
    expect(result).toEqual(expected);
  });

  it('create should not transform empty string', () => {
    // given
    const pipe = new CustomCpfMaskPipe();
    const expected = '';
    // when
    const result = pipe.transform(emptyCpf);
    // then
    expect(result).toEqual(expected);
  });

  it('create should not transform string with lenght smaller than 11', () => {
    // given
    const pipe = new CustomCpfMaskPipe();
    const expected = cpfSmallerLength;
    // when
    const result = pipe.transform(cpfSmallerLength);
    // then
    expect(result).toEqual(expected);
  });

  it('create should not transform string with lenght greater than 11', () => {
    // given
    const pipe = new CustomCpfMaskPipe();
    const expected = cpfGreaterLength;
    // when
    const result = pipe.transform(cpfGreaterLength);
    // then
    expect(result).toEqual(expected);
  });

  it('create should return empty string if value is undefined', () => {
    // given
    const pipe = new CustomCpfMaskPipe();
    const expected = emptyCpf;
    // when
    const result = pipe.transform(undefined);
    // then
    expect(result).toEqual(expected);
  });
});
