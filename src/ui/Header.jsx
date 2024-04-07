import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar.jsx";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  display: flex;
  justify-content: flex-end;
  gap: 2.4rem;
  align-items: center;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
