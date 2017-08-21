import { FacturationServicePage } from './app.po';

describe('facturation-service App', () => {
  let page: FacturationServicePage;

  beforeEach(() => {
    page = new FacturationServicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
