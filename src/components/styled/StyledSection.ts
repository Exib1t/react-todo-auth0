import styled from "@emotion/styled";

export const StyledSection = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  background: #eaeaea;
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
