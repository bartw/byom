import { css } from "styled-components";

export default {
  tablet: (...args) => css`
    @media only screen and (min-width: 480px) and (max-width: 768px) {
      ${css(...args)}
    }
  `,
  phone: (...args) => css`
    @media only screen and (max-width: 479px) {
      ${css(...args)}
    }
  `,
};