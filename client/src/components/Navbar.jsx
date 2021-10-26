import React from "react";
import styled from "styled-components";

import { BsList, BsHouseFill, BsGearFill } from "react-icons/bs";

const MyNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 50px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 32px;
  margin-bottom: 50px;
  padding: var(--space-1);
  color: var(--font-color);
  background: var(--secondary-color);
  aspect-ratio: 1;
`;

const Navbar = () => {
  return (
    <MyNavBar>
      <IconContainer>
        <BsList />
      </IconContainer>
      <IconContainer>
        <BsHouseFill />
      </IconContainer>
      <IconContainer>
        <BsGearFill />
      </IconContainer>
    </MyNavBar>
  );
};

export default Navbar;