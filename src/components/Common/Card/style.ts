import { css } from "@emotion/react";
import { Common } from "@styles/common";

export const cardStyle = css`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: ${Common.colors.box_gray};

  .card__title {
    font-size: 14px;
    font-weight: bold;
    color: ${Common.colors.btn_black};
  }

  .card__count {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    color: ${Common.colors.text_orangeRed};
  }
`;
