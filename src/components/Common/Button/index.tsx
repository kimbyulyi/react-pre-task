import React from "react";
import { css } from "@emotion/react";
import { buttonStyle, themes } from "./style";

export interface ButtonProps {
  colorType: "default" | "black";
  margin?: string;
  text: string;
}

export function Button({ colorType, margin, text }: ButtonProps): JSX.Element {
  return <button css={[buttonStyle, themes[colorType]]}>{text}</button>;
}
