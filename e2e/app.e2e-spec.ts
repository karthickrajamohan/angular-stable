import { AngularstablePage } from './app.po';

describe('angularstable App', function() {
  let page: AngularstablePage;

  beforeEach(() => {
    page = new AngularstablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
