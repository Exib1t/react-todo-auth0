import React from "react";
import styled from "@emotion/styled";
import { StyledSection, StyledSectionInner } from "../styled/StyledSection";

const Page = ({ children, id }: PageType) => {
  return (
    <StyledSection id={id}>
      <StyledSectionInner>{children}</StyledSectionInner>
    </StyledSection>
  );
};

export default Page;

interface PageType {
  children: any;
  id?: string;
}
