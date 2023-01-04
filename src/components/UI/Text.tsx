import React from "react";
import styled from "@emotion/styled";

const Text = ({
  children,
  align = "left",
  size = 24,
  weight = 400,
  width = "auto",
  margin = "0 0",
  line = "1",
  ...props
}: TextType) => {
  const StyledText = styled.p`
    width: ${width};
    margin: ${margin};
    padding: 0;
    font: ${weight} ${size}px / ${line} "Ubuntu";
    color: #4f4f4f;
    text-align: ${align};
  `;

  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;

interface TextType {
  children: string;
  align?: string;
  size?: number;
  weight?: number;
  line?: string;
  width?: string;
  margin?: string;
  props?: any;
}
