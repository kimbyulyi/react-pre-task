import { css } from "@emotion/react";
import { Common } from "@styles/common";

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 30px;

  .pagination__button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 25px;
    height: 25px;

    margin: 0px 10px;
    border-radius: 100%;

    background-color: ${Common.colors.btn_gray};
    color: white;

    font-size: ${Common.fontSize.pageNumber};

    cursor: pointer;

    &.selected {
      background-color: ${Common.colors.btn_black};
    }
  }

  svg {
    cursor: pointer;
  }
`;
