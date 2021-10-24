import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { themeDefault } from '../../styles/theme';
import {
  Container,
  ImageWrapper,
  MenuButton,
  NavbarItem,
  NavbarLink,
  NavbarWrapper,
  SectionHome,
  Subtitle,
  Title,
} from './styles';

function Navbar(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <MenuButton type="button" onClick={handleClickMenu}>
        <FontAwesomeIcon
          size="3x"
          color={themeDefault.yellowColor}
          icon={faEllipsisV}
        />
      </MenuButton>
      <SectionHome>
        <ImageWrapper>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </ImageWrapper>
        <Title>zutterman</Title>
        <Subtitle>Measure Tapes</Subtitle>
      </SectionHome>
      <NavbarWrapper>
        <NavbarItem>
          <NavbarLink href="#about-us">About us</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#models">Models</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#guarantee">Guarantee</NavbarLink>
        </NavbarItem>
      </NavbarWrapper>
    </Container>
  );
}

export default Navbar;
