import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthAsync } from "../async/AuthAsync";

const ProfileIcon = ({ handleClick, open }: any) => {
  const auth = useAuth0();
  const authAsync = new AuthAsync(auth);

  return (
    <IconButton
      onClick={handleClick}
      size="small"
      aria-controls={open ? "account-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
    >
      <Avatar alt={"Your profile"} src={authAsync.user?.picture} />
    </IconButton>
  );
};

export default ProfileIcon;
