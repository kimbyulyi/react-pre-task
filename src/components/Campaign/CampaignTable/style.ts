import { css } from "@emotion/react";

export const table = css`
  display: flex;
  flex-direction: column;
  width: 100%;

  .table__thead {
    width: 100%;
    margin: 30px 0px 20px 0px;
    padding: 20px 0px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;

    tr {
      display: flex;
      justify-content: flex-start;
      width: 100%;
    }

    th {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      font-weight: bold;

      &.table__cols3 {
        flex-grow: 2.5;
        justify-content: flex-start;
      }

      &.table__cols2 {
        flex-grow: 2;
      }
    }
  }

  .table__body {
    display: flex;
    width: 100%;
    padding: 30px 0px;
    border-bottom: 1px solid gray;

    td {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;

      &.table__cols3 {
        flex-grow: 2.5;
        justify-content: flex-start;
      }

      &.table__cols2 {
        flex-grow: 2;
      }

      &.table__body--type {
        svg {
          margin-right: 10px;
        }
      }
    }

    &:last-child {
      border-bottom: 2px solid black;
    }
  }
`;
