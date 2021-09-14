import React from "react";
import { PageArrowL, PageArrowR } from "../Icon";
import { pagination } from "./styled";

export const Pagination = ({
  limitPage,
  totalPageLength,
  currentPage,
  onPageChange,
}: {
  limitPage: number;
  totalPageLength: number;
  currentPage: number;
  onPageChange: (pageNum: number) => void;
}): JSX.Element => {
  const totalPage = Math.ceil(totalPageLength / limitPage);

  const handleClickPrev = () => {
    currentPage === 1 ? null : onPageChange(currentPage - 1);
  };

  const handleClickNext = () => {
    currentPage === totalPage ? null : onPageChange(currentPage + 1);
  };

  const currentPageRange = (totalPage: number) => {
    const currentPages = [];
    let startIndex = 1;
    let lastIndex = totalPage;

    if (totalPage <= 5) {
      startIndex = 1;
      lastIndex = totalPage;
    } else {
      if (currentPage <= 3) {
        startIndex = 1;
        lastIndex = 5;
      } else if (currentPage + 2 >= totalPage) {
        startIndex = totalPage - 4;
        lastIndex = totalPage;
      }
    }

    for (let i = startIndex; i <= lastIndex; i++) {
      currentPages.push(
        <li
          key={i}
          className={
            currentPage === i
              ? "pagination__button selected"
              : "pagination__button"
          }
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      );
    }

    return currentPages;
  };

  return (
    <ul className="pagination" css={pagination}>
      <PageArrowL width="20px" height="20px" onClick={handleClickPrev} />
      {currentPageRange(totalPage)}
      <PageArrowR width="20px" height="20px" onClick={handleClickNext} />
    </ul>
  );
};
