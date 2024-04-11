import { HiOutlineHome } from 'react-icons/hi2';
import { NavList, StyledNavLink } from './MainNav';

export function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">Bookings</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
