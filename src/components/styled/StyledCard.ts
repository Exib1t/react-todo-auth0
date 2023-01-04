import styled from "@emotion/styled";
import { ThemeState } from "../../store/reducers/themeSlicer";
import { theme } from "../../themes/theme";

export const StyledCard = styled.div`
  margin: 0 auto;
  padding: 30px 20px;
  box-sizing: border-box;
  background: ${(props) =>
    props.theme === ThemeState.light
      ? theme.palette.primary.dark
      : theme.palette.secondary.light};
  width: 100%;
  max-width: 650px;
  border-radius: 5px;
  box-shadow: 0 0 8px -5px #000000;
`;
