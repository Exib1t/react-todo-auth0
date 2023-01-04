import styled from "@emotion/styled";

export const StyledForm = styled.form`
  width: 100%;
  margin: 20px 0;
  padding: 0;
  display: flex;
  flex-direction: ${(props: Props) => (props.column ? "column" : "row")};
  gap: 15px;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 10px 20px 9px;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(101, 60, 180, 0.1), transparent);
  outline: none;
  border: none;
  border-bottom: 2px solid #653cb4;
  font: 500 18px/1 "Ubuntu";
  color: #4f4f4f;

  &:focus {
    background: linear-gradient(0deg, rgba(101, 60, 180, 0.2), transparent);
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
  margin: 0;
  padding: 0;
`;

interface Props {
  column?: boolean;
}
