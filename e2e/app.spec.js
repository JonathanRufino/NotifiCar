describe('App starts correctly', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should show login screen', async () => {
    await expect(element(by.id('facebookButton'))).toBeVisible();
  });
});
