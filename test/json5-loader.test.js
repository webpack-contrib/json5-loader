import { name as PROJECT_NAME } from '../package.json';
import Json5Loader from '../src';

const staticJson5 = "{name: 'test'}";

describe(PROJECT_NAME, () => {
  test('should export the loader', (done) => {
    expect(Json5Loader).toBeInstanceOf(Function);
    done();
  });

  test('should convert to requires', (done) => {
    const content = Json5Loader.call({}, staticJson5);
    expect(content).toBe('module.exports = {\n\t"name": "test"\n}');
    done();
  });

  test('should catch invalid JSON5', (done) => {
    const brokenJson5 = '{broken: json5}';
    expect(() => {
      Json5Loader.call({}, brokenJson5);
    }).toThrow('Error parsing JSON5');
    done();
  });
});
