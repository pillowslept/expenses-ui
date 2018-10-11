import { AngularCrudRestPage } from './app.po';

describe('expenses-ui App', () => {
  let page: AngularCrudRestPage;

  beforeEach(() => {
    page = new AngularCrudRestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
