import { css } from "@emotion/react";
import { Common } from "@styles/common";

export const buttonStyle = css`
  width: 80px;
  height: 40px;
  padding: 12px 15px 11px 16px;
  border-radius: 2px;
`;

export const themes = {
  default: css`
    color: ${Common.colors.btn_black};
    background-color: ${Common.colors.white};
    border: 1px solid ${Common.colors.border_gray};
  `,
  black: css`
    color: ${Common.colors.white};
    background-color: ${Common.colors.btn_black};
  `,
};
