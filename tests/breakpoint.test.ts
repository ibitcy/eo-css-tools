import expect from 'expect';
import { breakpoint } from '../src';

const MOBILE_INT = [0, 400];
const MOBILE_FLT = [0.1, 400.25];
const MOBILE_STR = ['0px', '400px'];
const MOBILE_FLT_STR = ['0.1px', '400.25px'];

describe('breakpoint', () => {
  it('check min with integer', done => {
    expect(breakpoint({ min: MOBILE_INT[0] })`background-color: red;`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) {background-color: red;}`,
    );
    done();
  });

  it('check max with integer', done => {
    expect(breakpoint({ max: MOBILE_INT[1] })`background-color: red;`).toEqual(
      `@media only screen and (max-width: ${MOBILE_STR[1]}) {background-color: red;}`,
    );
    done();
  });

  it('check min & max with integer', done => {
    expect(breakpoint({ min: MOBILE_INT[0], max: MOBILE_INT[1] })`background-color: red;`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) and (max-width: ${MOBILE_STR[1]}) {background-color: red;}`,
    );
    done();
  });

  it('check min with float', done => {
    expect(breakpoint({ min: MOBILE_FLT[0] })`background-color: red;`).toEqual(
      `@media only screen and (min-width: ${MOBILE_FLT_STR[0]}) {background-color: red;}`,
    );
    done();
  });

  it('check max with float', done => {
    expect(breakpoint({ max: MOBILE_FLT[1] })`background-color: red;`).toEqual(
      `@media only screen and (max-width: ${MOBILE_FLT_STR[1]}) {background-color: red;}`,
    );
    done();
  });

  it('check min & max with float', done => {
    expect(breakpoint({ min: MOBILE_FLT[0], max: MOBILE_FLT[1] })`background-color: red;`).toEqual(
      `@media only screen and (min-width: ${MOBILE_FLT_STR[0]}) and (max-width: ${MOBILE_FLT_STR[1]}) {background-color: red;}`,
    );
    done();
  });

  it('check min with string', done => {
    expect(breakpoint({ min: MOBILE_STR[0] })`background-color: red;`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) {background-color: red;}`,
    );
    done();
  });

  it('check max with string', done => {
    expect(breakpoint({ max: MOBILE_STR[1] })`background-color: red;`).toEqual(
      `@media only screen and (max-width: ${MOBILE_STR[1]}) {background-color: red;}`,
    );
    done();
  });

  it('check min & max with string', done => {
    expect(breakpoint({ min: MOBILE_STR[0], max: MOBILE_STR[1] })`background-color: red;`).toEqual(
      `@media only screen and (min-width: ${MOBILE_STR[0]}) and (max-width: ${MOBILE_STR[1]}) {background-color: red;}`,
    );
    done();
  });
});
