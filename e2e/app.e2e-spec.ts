import { Angular2CodeschoolPage } from './app.po';

describe('angular2-codeschool App', function() {
  let page: Angular2CodeschoolPage;

  beforeEach(() => {
    page = new Angular2CodeschoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
