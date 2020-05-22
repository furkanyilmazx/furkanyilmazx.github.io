import { css } from "styled-components";

import { BREAK_POINTS, DEVICE_SIZE } from "@furkanyilmazx/constants/enums";

export function getSizeFromBreakpoints(
  size = DEVICE_SIZE.MEDIUM,
  breakPoints = BREAK_POINTS
) {
  return breakPoints[size];
}

export function greaterThan(breakpoint) {
  return function (...args) {
    return css`
      @media (min-width: ${getSizeFromBreakpoints(breakpoint)}) {
        ${css(...args)}
      }
    `;
  };
}

export function lessThan(breakpoint) {
  return function (...args) {
    return css`
      @media (max-width: ${getSizeFromBreakpoints(breakpoint)}) {
        ${css(...args)}
      }
    `;
  };
}

export function between(firstBreakpoint, secondBreakpoint) {
  return function (...args) {
    return css`
      @media (min-width: ${getSizeFromBreakpoints(
          firstBreakpoint
        )}) and (max-width: ${getSizeFromBreakpoints(secondBreakpoint)}) {
        ${css(...args)}
      }
    `;
  };
}
export default {
  sm: lessThan(DEVICE_SIZE.SMALL),
  md: lessThan(DEVICE_SIZE.MEDIUM),
  lg: lessThan(DEVICE_SIZE.LARGE),
  xl: lessThan(DEVICE_SIZE.X_LARGE),
  gtSm: greaterThan(DEVICE_SIZE.SMALL),
  gtMd: greaterThan(DEVICE_SIZE.MEDIUM),
  gtLg: greaterThan(DEVICE_SIZE.LARGE),
  gtXl: greaterThan(DEVICE_SIZE.X_LARGE),
};
