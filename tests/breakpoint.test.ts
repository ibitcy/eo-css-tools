import expect from 'expect';
import { brp, breakpoint } from '../src';

const MOBILE_INT = [0, 400];
const MOBILE_FLT = [0.1, 400.25];
const MOBILE_STR = ['0', '400px'];
const MOBILE_FLT_STR = ['0.1px', '400.25px'];

describe('breakpoint', () => {
  it('check brp alias', done => {
    expect(`${brp({ min: MOBILE_INT[0] })} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) { background-color: red; }`,
    );
    done();
  });

  it('check min with integer', done => {
    expect(`${breakpoint({ min: MOBILE_INT[0] })} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) { background-color: red; }`,
    );
    done();
  });

  it('check max with integer', done => {
    expect(`${breakpoint({ max: MOBILE_INT[1] })} { background-color: red; }`).toEqual(
      `@media only screen and (max-width: ${MOBILE_STR[1]}) { background-color: red; }`,
    );
    done();
  });

  it('check min & max with integer', done => {
    expect(`${breakpoint({ min: MOBILE_INT[0], max: MOBILE_INT[1] })} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) and (max-width: ${MOBILE_STR[1]}) { background-color: red; }`,
    );
    done();
  });

  it('check min with float', done => {
    expect(`${breakpoint({ min: MOBILE_FLT[0] })} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${MOBILE_FLT_STR[0]}) { background-color: red; }`,
    );
    done();
  });

  it('check max with float', done => {
    expect(`${breakpoint({ max: MOBILE_FLT[1] })} { background-color: red; }`).toEqual(
      `@media only screen and (max-width: ${MOBILE_FLT_STR[1]}) { background-color: red; }`,
    );
    done();
  });

  it('check min & max with float', done => {
    expect(`${breakpoint({ min: MOBILE_FLT[0], max: MOBILE_FLT[1] })} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${MOBILE_FLT_STR[0]}) and (max-width: ${MOBILE_FLT_STR[1]}) { background-color: red; }`,
    );
    done();
  });

  it('check min with string', done => {
    expect(`${breakpoint({ min: MOBILE_STR[0] })} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) { background-color: red; }`,
    );
    done();
  });

  it('check max with string', done => {
    expect(`${breakpoint({ max: MOBILE_STR[1] })} { background-color: red; }`).toEqual(
      `@media only screen and (max-width: ${MOBILE_STR[1]}) { background-color: red; }`,
    );
    done();
  });

  it('check min & max with string', done => {
    expect(`${breakpoint({ min: MOBILE_STR[0], max: MOBILE_STR[1] })} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) and (max-width: ${MOBILE_STR[1]}) { background-color: red; }`,
    );
    done();
  });

  it('check min & max with integer as array', done => {
    expect(`${breakpoint(MOBILE_INT)} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) and (max-width: ${MOBILE_STR[1]}) { background-color: red; }`,
    );
    done();
  });

  it('check Infinity values', done => {
    expect(`${breakpoint([1000, Infinity])} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: 1000px) { background-color: red; }`,
    );
    done();
  });

  it('check Infinity values', done => {
    expect(`${breakpoint([Infinity, Infinity])}`).toEqual('');
    done();
  });

  it('check Infinity values', done => {
    expect(`${breakpoint([-Infinity, MOBILE_STR[1]])} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: 0) and (max-width: ${MOBILE_STR[1]}) { background-color: red; }`,
    );
    done();
  });

  it('check NaN values', done => {
    expect(`${breakpoint(['wow!'])}`).toEqual('');
    done();
  });

  it('check NaN values', done => {
    expect(`${breakpoint(['wow!', 'yay!'])}`).toEqual('');
    done();
  });

  it('check NaN values', done => {
    expect(`${breakpoint([100, 'yay!'])} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: 100px) { background-color: red; }`,
    );
    done();
  });

  it('check NaN values', done => {
    expect(`${breakpoint(['wow!', 1000])} { background-color: red; }`).toEqual(
      `@media only screen and (max-width: 1000px) { background-color: red; }`,
    );
    done();
  });

  it('Result template', done => {
    const color = 'red';
    const padding = '10px';
    expect(`${breakpoint([1, 2])} { background-color: ${color}; color: ${color}; height: ${1}px; width: ${1 +
        1}px; padding: ${padding} ${padding} ${0} ${'10px'}; }`,
    ).toEqual(
      `@media only screen and (min-width: 1px) and (max-width: 2px) { background-color: red; color: red; height: 1px; width: 2px; padding: 10px 10px 0 10px; }`,
    );
    done();
  });
});
