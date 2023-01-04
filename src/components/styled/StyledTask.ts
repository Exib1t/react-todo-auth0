import styled from "@emotion/styled";
import { theme } from "../../themes/theme";
import { ThemeState } from "../../store/reducers/themeSlicer";

export const StyledTask = styled.div`
  width: 100%;
  margin: 0 0 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0;
  border-left: 3px solid #653cb4;
  border-color: ${(props: Props) =>
    props.completed ? theme.palette.divider : theme.palette.primary.main};
  background: ${(props) =>
    props.theme === ThemeState.light
      ? theme.palette.primary.light
      : theme.palette.secondary.dark};
  transition: background-color, border-left-color 0.3s;

  &:last-child {
    margin: 0;
  }
`;

interface Props {
  completed: boolean;
}
