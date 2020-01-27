import expect from 'expect';
import { templateToString } from '../src/templateToString';

describe('templateToString', () => {
  it('raw', done => {
    expect(templateToString`-1. 0, 1: 2; 3, 4;`).toEqual(`-1. 0, 1: 2; 3, 4;`);
    done();
  });

  it('template', done => {
    expect(templateToString`${-1}. ${0}, ${1}: 2; 3, 4;`).toEqual(`-1. 0, 1: 2; 3, 4;`);
    done();
  });

  it('complex', done => {
    const color = 'red';
    const padding = 10;
    expect(
      templateToString`1: ${color} 2: ${color} 3: ${1}; 4: ${1 + 1}; 5: ${padding} ${padding} ${0} ${'10'}`,
    ).toEqual(`1: red; 2: red; 3: 1px; 4: 2px; 5: 10 10 0 10`);
    done();
  });
});
