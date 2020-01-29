import expect from 'expect';
import {normalizePixelValue} from '../src/normalizePixelValue';

describe('normalizePixelValue', () => {
  it('integer', done => {
    expect(normalizePixelValue(1)).toEqual(`1px`);
    done();
  });

  it('string', done => {
    expect(normalizePixelValue('1')).toEqual(`1px`);
    done();
  });

  it('float', done => {
    expect(normalizePixelValue('0.1')).toEqual(`0.1px`);
    done();
  });

  it('NaN', done => {
    expect(normalizePixelValue(NaN)).toEqual(undefined);
    done();
  });

  it('Infinity', done => {
    expect(normalizePixelValue(Infinity)).toEqual(undefined);
    done();
  });

  it('-Infinity', done => {
    expect(normalizePixelValue(-Infinity)).toEqual('0');
    done();
  });

  it('-1', done => {
    expect(normalizePixelValue(-1)).toEqual('-1px');
    done();
  });

  it('1000px', done => {
    expect(normalizePixelValue('1000px')).toEqual('1000px');
    done();
  });

  it('zzz', done => {
    expect(normalizePixelValue('zzz')).toEqual(undefined);
    done();
  });
});
