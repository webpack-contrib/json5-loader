import { name as PROJECT_NAME } from '../package.json';
import Json5Plugin from '../src';

const staticJson5 = "{name: 'test'}";

describe(PROJECT_NAME, () => {
  test('should export the loader', (done) => {
    expect(Json5Plugin).toBeInstanceOf(Function);
    done();
  });

  test('should convert to requires', (done) => {
    const content = Json5Plugin.call({}, staticJson5);
    expect(content).toBe('module.exports = {\n\t"name": "test"\n}');
    done();
  });

  test('should fire cacheable', (done) => {
    const cacheable = () => {
      done();
    };
    const content = Json5Plugin.call({ cacheable }, staticJson5);
    expect(content).toBe('module.exports = {\n\t"name": "test"\n}');
  });

  test('should catch invalid JSON5', (done) => {
    const brokenJson5 = '{broken: json5}';
    expect(() => {
      Json5Plugin.call({}, brokenJson5);
    }).toThrow('Error using JSON5 parsing');
    done();
  });
});
