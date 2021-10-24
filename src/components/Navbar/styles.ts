import styled from 'styled-components';

export const Container = styled.nav`
  font-family: 'Roboto Condensed', sans-serif;
  background-color: ${(props) => props.theme.lightColor};
  font-weight: 300;
  padding: 1rem 3rem;

  @media (max-width: ${(props) => props.theme.mobileWidth}px) {
    display: flex;
  }

  @media (min-width: ${(props) => props.theme.mobileWidth + 1}px) {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) 1fr;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  margin-right: auto;

  @media (min-width: ${(props) => props.theme.mobileWidth + 1}px) {
    display: none;
  }
`;

export const SectionHome = styled.section`
  color: ${(props) => props.theme.brownColor};

  @media (min-width: ${(props) => props.theme.mobileWidth + 1}px) {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-items: center;
    align-items: center;
    margin-right: auto;
    column-gap: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  grid-row: 1 / 3;

  img {
    display: block;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.575rem;

  @media (max-width: ${(props) => props.theme.mobileWidth}px) {
    display: none;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.013rem;
  letter-spacing: 0.338rem;

  @media (max-width: ${(props) => props.theme.mobileWidth}px) {
    display: none;
  }
`;

export const NavbarWrapper = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  column-gap: 1rem;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  align-items: center;

  @media (max-width: ${(props) => props.theme.mobileWidth}px) {
    display: none;
  }
`;

export const NavbarItem = styled.li``;

export const NavbarLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.brownColor};
  font-size: 1rem;
  letter-spacing: 0.34rem;
  line-height: 1.2rem;

  :hover {
    text-decoration: underline;
  }
`;
