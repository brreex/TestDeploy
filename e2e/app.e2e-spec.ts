import { NginxTestPage } from './app.po';

describe('nginx-test App', () => {
  let page: NginxTestPage;

  beforeEach(() => {
    page = new NginxTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
