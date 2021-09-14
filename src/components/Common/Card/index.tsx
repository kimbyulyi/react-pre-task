import React from "react";
import { css } from "@emotion/react";
import { cardStyle } from "./style";
import { Title } from "..";

export interface CardProps {
  title: string;
  total: number;
  type: "count" | "people";
}

export function Card({ title, total, type }: CardProps): JSX.Element {
  return (
    <div css={cardStyle}>
      <Title type="sub" text={title} />
      <span className="card__count">
        {total}
        {type === "count" ? "개" : "명"}
      </span>
    </div>
  );
}
