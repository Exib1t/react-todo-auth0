import styled from "@emotion/styled";
import { ThemeState } from "../../store/reducers/themeSlicer";
import { theme } from "../../themes/theme";

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledLink = styled.a`
  margin: 0;
  padding: 0;
  font: 500 20px/42px "Ubuntu";
  color: ${(props) =>
    props.theme === ThemeState.light
      ? theme.palette.text.primary
      : theme.palette.text.secondary};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${(props) =>
      props.theme === ThemeState.light
        ? theme.palette.secondary.dark
        : theme.palette.primary.light};
  }
`;
