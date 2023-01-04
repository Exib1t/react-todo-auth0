import React from "react";
import styled from "@emotion/styled";
import { useAppSelector } from "../../hooks/redux";
import { ThemeState } from "../../store/reducers/themeSlicer";
import { theme as colors } from "../../themes/theme";

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
  const { theme } = useAppSelector((state) => state.theme);

  const StyledText = styled.p`
    width: ${width};
    margin: ${margin};
    padding: 0;
    font: ${weight} ${size}px / ${line} "Ubuntu";
    color: ${(props) =>
      props.theme === ThemeState.light
        ? colors.palette.text.primary
        : colors.palette.text.secondary};
    text-align: ${align};
    transition: color 0.3s;
  `;

  return (
    <StyledText theme={theme} {...props}>
      {children}
    </StyledText>
  );
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
