import { ExpensesUIPage } from './app.po';

describe('expenses-ui App', () => {
  let page: ExpensesUIPage;

  beforeEach(() => {
    page = new ExpensesUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
