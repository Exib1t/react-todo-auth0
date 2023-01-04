import styled from "@emotion/styled";

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
  color: #4f4f4f;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #000000;
  }
`;
