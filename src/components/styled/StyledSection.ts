import styled from "@emotion/styled";
import { ThemeState } from "../../store/reducers/themeSlicer";
import { theme } from "../../themes/theme";

export const StyledSection = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background: ${(props) => props.color};
  background: ${(props) =>
    props.theme === ThemeState.light
      ? theme.palette.primary.dark
      : theme.palette.secondary.light};
  transition: background-color 0.3s;
`;

export const StyledSectionInner = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 100px 20px;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 5;
  background: #ffffff;
  background: ${(props) =>
    props.theme === ThemeState.light
      ? theme.palette.primary.light
      : theme.palette.secondary.dark};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-color: ${(props) =>
    props.theme === ThemeState.light
      ? "rgba(0, 0, 0, 0.2)"
      : "rgba(255, 255, 255, 0.2)"};
  transition: background-color, border-bottom-color 0.3s;
`;

export const StyledHeaderInner = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
