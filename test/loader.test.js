import JSON5 from 'json5';

import loader from '../src';

describe('loader', () => {
  it('should export the loader', (done) => {
    expect(loader).toBeInstanceOf(Function);

    done();
  });

  it('should handle valid JSON5', (done) => {
    const json5 = `{
  // comments
  unquoted: 'and you can quote me on that',
  singleQuotes: 'I can use "double quotes" here',
  lineBreaks: "Look, Mom! \\
No \\\\n's!",
  hexadecimal: 0xdecaf,
  leadingDecimalPoint: .8675309, andTrailing: 8675309.,
  positiveSign: +1,
  trailingComma: 'in objects', andIn: ['arrays',],
  "backwardsCompatible": "with JSON",
}`;
    const emitError = jest.fn();
    const content = loader.call(
      {
        emitError,
      },
      json5
    );

    expect(content).toMatchSnapshot();

    // eslint-disable-next-line no-eval
    const js = eval(content);

    expect(JSON5.stringify(js)).toEqual(JSON5.stringify(JSON5.parse(json5)));

    done();
  });

  it('should invalid characters', (done) => {
    const json5 = `{foo: '\u2028\u2029'}`;
    const emitError = jest.fn();
    const content = loader.call(
      {
        emitError,
      },
      json5
    );

    expect(content).toMatchSnapshot();

    // eslint-disable-next-line no-eval
    const js = eval(content);

    expect(JSON5.stringify(js)).toEqual(JSON5.stringify(JSON5.parse(json5)));

    done();
  });

  it('should preserve Infinity', (done) => {
    const json5 = '{to : Infinity}';
    const content = loader.call({}, json5);

    expect(content).toMatchSnapshot();

    // eslint-disable-next-line no-eval
    const js = eval(content);

    expect(JSON5.stringify(js)).toEqual(JSON5.stringify(JSON5.parse(json5)));

    done();
  });

  it('should preserve -Infinity', (done) => {
    const json5 = '{to : -Infinity}';
    const content = loader.call({}, json5);

    expect(content).toMatchSnapshot();

    // eslint-disable-next-line no-eval
    const js = eval(content);

    expect(JSON5.stringify(js)).toEqual(JSON5.stringify(JSON5.parse(json5)));

    done();
  });

  it('should preserve null', (done) => {
    const json5 = '{null : null}';
    const content = loader.call({}, json5);

    expect(content).toMatchSnapshot();

    // eslint-disable-next-line no-eval
    const js = eval(content);

    expect(JSON5.stringify(js)).toEqual(JSON5.stringify(JSON5.parse(json5)));

    done();
  });

  it('should preserve NaN', (done) => {
    const json5 = '{nan : NaN}';
    const content = loader.call({}, '{nan : NaN}');

    expect(content).toMatchSnapshot();

    // eslint-disable-next-line no-eval
    const js = eval(content);

    expect(JSON5.stringify(js)).toEqual(JSON5.stringify(JSON5.parse(json5)));

    done();
  });

  it('should handle invalid JSON5', (done) => {
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
});
