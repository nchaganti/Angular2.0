import { HelloangularPage } from './app.po';

describe('helloangular App', function() {
  let page: HelloangularPage;

  beforeEach(() => {
    page = new HelloangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
