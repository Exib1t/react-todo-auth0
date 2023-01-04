import styled from "@emotion/styled";

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
    props.completed ? "rgb(31,185,57)" : "#653cb4"};
  background: #ffffff;

  &:last-child {
    margin: 0;
  }
`;

interface Props {
  completed: boolean;
}
