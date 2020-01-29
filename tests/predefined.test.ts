import expect from 'expect';
import {desktop, mobile, mobileLandscape, PREDEFINED, tablet, tabletLandscape} from '../src';

describe('predefined', () => {
  it('mobile', done => {
    expect(`${mobile()} { background-color: red; }`).toEqual(
      `@media only screen and (max-width: ${PREDEFINED.MOBILE[1]}px) { background-color: red; }`,
    );
    done();
  });

  it('mobileLandscape', done => {
    expect(`${mobileLandscape()} { background-color: red; }`).toEqual(
      `@media only screen and (max-width: ${PREDEFINED.MOBILE_LANDSCAPE[1]}px) { background-color: red; }`,
    );
    done();
  });

  it('tablet', done => {
    expect(`${tablet()} { background-color: red; }`).toEqual(
      `@media only screen and (max-width: ${PREDEFINED.TABLET[1]}px) { background-color: red; }`,
    );
    done();
  });

  it('tabletLandscape', done => {
    expect(`${tabletLandscape()} { background-color: red; }`).toEqual(
      `@media only screen and (max-width: ${PREDEFINED.TABLET_LANDSCAPE[1]}px) { background-color: red; }`,
    );
    done();
  });

  it('desktop', done => {
    expect(`${desktop()} { background-color: red; }`).toEqual(
      `@media only screen and (min-width: ${PREDEFINED.DESKTOP[0]}px) { background-color: red; }`,
    );
    done();
  });
});
