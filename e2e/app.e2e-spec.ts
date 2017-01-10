import { DogDatingIoPage } from './app.po';

describe('dog-dating-io App', function() {
  let page: DogDatingIoPage;

  beforeEach(() => {
    page = new DogDatingIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
