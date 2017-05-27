import { Ng4ProductsPage } from './app.po';

describe('ng4-products App', () => {
  let page: Ng4ProductsPage;

  beforeEach(() => {
    page = new Ng4ProductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
