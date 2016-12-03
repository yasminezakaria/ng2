import { YasminePage } from './app.po';

describe('yasmine App', function() {
  let page: YasminePage;

  beforeEach(() => {
    page = new YasminePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
