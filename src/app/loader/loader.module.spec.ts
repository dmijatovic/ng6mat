import { AppLoaderModule } from './loader.module';

describe('AppLoaderModule', () => {
  let loaderModule: AppLoaderModule;

  beforeEach(() => {
    loaderModule = new AppLoaderModule();
  });

  it('should create an instance', () => {
    expect(loaderModule).toBeTruthy();
  });
});
