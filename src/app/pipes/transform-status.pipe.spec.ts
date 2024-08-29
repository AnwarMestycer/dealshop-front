import { transformStatusPipe } from './transform-status.pipe';

describe('TranslateStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new transformStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
