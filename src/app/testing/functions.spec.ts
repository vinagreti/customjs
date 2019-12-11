import { appTestingMockReadOnlyProperties, appTestingNoopMethod } from './functions';

describe('TestingFunctions', () => {
  it('should override navigator language', () => {
    const newLanguage = 'qualquercoisa';
    appTestingMockReadOnlyProperties(navigator, 'language', newLanguage);
    expect(navigator.language).toBeTruthy(newLanguage);
  });

  it('should return empty string from appTestingNoopMethod', () => {
    const res = appTestingNoopMethod();
    expect(res).toEqual('');
  });
});
