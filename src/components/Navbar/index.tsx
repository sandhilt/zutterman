import logo from '../../assets/images/logo.svg';
import {
  Container,
  ImageWrapper,
  NavbarItem,
  NavbarLink,
  NavbarWrapper,
  SectionHome,
  Subtitle,
  Title,
} from './styles';

function Navbar(): JSX.Element {
  return (
    <Container>
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
