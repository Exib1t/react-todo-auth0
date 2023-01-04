import React from "react";
import styled from "@emotion/styled";
import { StyledSection, StyledSectionInner } from "../styled/StyledSection";
import { useAppSelector } from "../../hooks/redux";
import { useTheme } from "@mui/material";

const Page = ({ children, id }: PageType) => {
  const { theme } = useAppSelector((state) => state.theme);
  const colors = useTheme();

  return (
    <StyledSection id={id} theme={theme}>
      <StyledSectionInner>{children}</StyledSectionInner>
    </StyledSection>
  );
};

export default Page;

interface PageType {
  children: any;
  id?: string;
}
