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
    expect(content).toBe('module.exports = { name: \'test\' }');
    done();
  });

  test('should catch invalid JSON5', (done) => {
    const brokenJson5 = '{broken: json5}';
    expect(() => {
      Json5Loader.call({}, brokenJson5);
    }).toThrow('Error parsing JSON5');
    done();
  });

  test('should preserve Infinity', (done) => {
    const content = Json5Loader.call({}, '{to : Infinity}');
    expect(content).toBe('module.exports = { to: Infinity }');
    done();
  });

  test('should preserve NaN', (done) => {
    const content = Json5Loader.call({}, '{nan : NaN}');
    expect(content).toBe('module.exports = { nan: NaN }');
    done();
  });
});
