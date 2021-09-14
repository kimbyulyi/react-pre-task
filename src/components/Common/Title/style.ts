import { css } from "@emotion/react";
import { Common } from "@styles/common";

export const themes = {
  big: css`
    font-size: 40px;
    font-weight: bold;
  `,
  sub: css`
    font-size: 14px;
    font-weight: bold;
  `,
  default: css`
    color: ${Common.colors.btn_black};
    font-size: 15px;
  `,
};

export const titleStyle = css`
  color: ${Common.colors.btn_black};
`;
