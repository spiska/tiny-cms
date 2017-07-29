import { EbaPage } from './app.po';

describe('eba App', function() {
  let page: EbaPage;

  beforeEach(() => {
    page = new EbaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
