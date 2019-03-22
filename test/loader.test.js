import loader from '../src';

const staticJson5 = "{name: 'test'}";

describe('loader', () => {
  test('should export the loader', (done) => {
    expect(loader).toBeInstanceOf(Function);
    done();
  });

  test('should convert to requires', (done) => {
    const content = loader.call({}, staticJson5);
    expect(content).toBe("module.exports = { name: 'test' }");
    done();
  });

  test('should handle invalid JSON5', (done) => {
    const brokenJson5 = '{broken: json5}';
    const emitError = jest.fn();

    loader.call(
      {
        emitError,
      },
      brokenJson5
    );
    expect(emitError).toHaveBeenCalledWith(expect.any(SyntaxError));
    done();
  });

  test('should preserve Infinity', (done) => {
    const content = loader.call({}, '{to : Infinity}');
    expect(content).toBe('module.exports = { to: Infinity }');
    done();
  });

  test('should preserve NaN', (done) => {
    const content = loader.call({}, '{nan : NaN}');
    expect(content).toBe('module.exports = { nan: NaN }');
    done();
  });
});
