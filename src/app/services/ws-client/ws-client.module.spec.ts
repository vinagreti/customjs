import { CustomWsClientModule } from './ws-client.module';

describe('CustomWsClientModule', () => {
  let wsClientModule: CustomWsClientModule;

  beforeEach(() => {
    wsClientModule = new CustomWsClientModule();
  });

  it('should create an instance', () => {
    expect(wsClientModule).toBeTruthy();
  });
});
