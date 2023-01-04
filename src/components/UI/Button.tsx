import React from "react";
import styled from "@emotion/styled";

const Button = ({
  children,
  type,
  align = "flex-start",
  size = "small",
  padding = "12px 35px",
  margin = "0",
  background = ["#653cb4", "#805cc7"],
  radius = 5,
  ...props
}: ButtonType) => {
  const fontSize = size === "small" ? 18 : size === "medium" ? 24 : 28;
  const bg: string | null = Array.isArray(background) ? background[0] : null;
  const bgHover: string | null = Array.isArray(background)
    ? background[1]
    : null;

  const StyledButton = styled.button`
    margin: ${margin};
    padding: ${padding};
    box-sizing: border-box;
    font: 500 ${fontSize}px / 1 "Ubuntu";
    color: #ffffff;
    background: ${bg || background};
    border-radius: ${radius}px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.2s;
    align-self: ${align};

    &:hover {
      background: ${bgHover || background};
    }
  `;

  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

interface ButtonType {
  children: any;
  type?: string;
  onClick?: any;
  align?: string;
  size?: string;
  padding?: string;
  margin?: string;
  radius?: number;
  background?: string | string[];
  props?: any;
}
