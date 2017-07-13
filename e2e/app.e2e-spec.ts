import { AxaControlPage } from './app.po';

describe('axa-control App', () => {
  let page: AxaControlPage;

  beforeEach(() => {
    page = new AxaControlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
