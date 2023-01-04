import React, { FC } from "react";
import Page from "../components/UI/Page";
import { FormControl, TextField } from "@mui/material";
import Text from "../components/UI/Text";
import { StyledCard } from "../components/styled/StyledCard";
import { useAppSelector } from "../hooks/redux";

interface Props {}

const ProfilePage: FC<Props> = () => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <Page>
      <StyledCard theme={theme}>
        <Text align={"center"} margin={"0 0 25px"}>
          My Account
        </Text>
        <FormControl fullWidth>
          <TextField
            color={"primary"}
            type={"email"}
            variant={"outlined"}
            label={"Username:"}
            sx={{ mb: "10px" }}
          />
          <TextField
            color={"primary"}
            type={"email"}
            variant={"outlined"}
            label={"Email:"}
          />
        </FormControl>
      </StyledCard>
    </Page>
  );
};

export default ProfilePage;
