import React, { FC } from "react";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout, Person, Settings } from "@mui/icons-material";
import { useAppDispatch } from "../hooks/redux";
import { logoutUser } from "../store/reducers/userSlicer";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

interface Props {
  state: boolean;
  anchorEl?: HTMLElement | null;
  handleClose: any;
}

const ProfileMenu: FC<Props> = ({ state, anchorEl, handleClose }) => {
  const dispatch = useAppDispatch();
  const auth = useAuth0();
  function onLogout() {
    dispatch(logoutUser({ auth }));
  }

  return (
    <Menu
      open={state}
      anchorEl={anchorEl}
      onClose={handleClose}
      onClick={handleClose}
    >
      <MenuItem>
        <Link
          to={"profile"}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            color: "#000000",
          }}
        >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          Profile
        </Link>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem
        sx={{
          background: "rgba(255,0,0,0.2)",
          ":hover": { background: "rgba(255,0,0,0.3)" },
        }}
        onClick={onLogout}
      >
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
