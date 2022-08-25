import { render, RenderResult, screen } from '@testing-library/react';
import { Input } from './index';

describe('Input', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id='username' label='Username' />);
  });

  afterEach(() => {
    renderResult.unmount;
  });

  it('should empty in input on initial render', () => {
    //labelがUsernameであるコンポーネントに対応するinputの要素を取得する
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
    expect(inputNode).toHaveValue('');
  });
});
