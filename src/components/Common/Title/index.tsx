import React from "react";
import { css } from "@emotion/react";
import { titleStyle, themes } from "./style";

export interface TitleProps {
  type: "big" | "sub" | "default";
  text: string;
}

export function Title({ type, text }: TitleProps): JSX.Element {
  return <span css={[titleStyle, themes[type]]}>{text}</span>;
}
