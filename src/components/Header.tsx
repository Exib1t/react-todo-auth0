import React, { useRef, useState } from "react";
import Text from "./UI/Text";
import { StyledHeader, StyledHeaderInner } from "./styled/StyledSection";
import LoginButton from "./LoginButton";
import { StyledLink, StyledList } from "./styled/StyledList";
import ProfileIcon from "./ProfileIcon";
import { useAppSelector } from "../hooks/redux";
import ProfileMenu from "./ProfileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const { authenticated } = useAppSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Text size={30} weight={700} align={"center"}>
            Todo-App
          </Text>
        </Link>
        <StyledList>
          {authenticated && (
            <li>
              <StyledLink href={"app"}>App</StyledLink>
            </li>
          )}
          <li>
            <StyledLink href={"#about"}>About</StyledLink>
          </li>
          <li>
            <StyledLink href={"#contacts"}>Contacts</StyledLink>
          </li>
          {authenticated ? (
            <>
              <ProfileIcon handleClick={handleClick} open={open} />
              <ProfileMenu
                state={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
              />
            </>
          ) : (
            <li>
              <LoginButton />
            </li>
          )}
        </StyledList>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
