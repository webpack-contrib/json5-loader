import loader from '../src';

it('validation', async () => {
  const json5 = '{ foo: "bar" }';
  const emitError = jest.fn();

  expect(() => {
    loader.call(
      {
        emitError,
      },
      json5
    );
  }).not.toThrow();

  expect(() => {
    loader.call(
      {
        query: {
          foo: 'bar',
        },
        emitError,
      },
      json5
    );
  }).toThrowErrorMatchingSnapshot();
});
