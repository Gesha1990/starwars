import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../page';
import Loading from '../loading';
import Error from '../error';

jest.mock('../globals.css', () => {
  return {};
});

describe('Check rendering Characters page, Loading and Error Page ', () => {
  it('Check rendering root Page and calling api function', async function () {
    const jsx = await Page();
    const document = render(jsx);
    expect(document.getByText('Star wars main page')).toBeDefined();
  });
  it('Check rendering Loading Page', async function () {
    const document = render(<Loading />);
    expect(document.getByText('Loading...')).toBeDefined();
  });
  it('Check rendering Error Page', async function () {
    const error = {
      name: '404',
      message: 'Something went wrong'
    };
    const document = render(<Error error={error} reset={() => {}} />);

    expect(document.getByText('Something went wrong')).toBeDefined();
  });
});
