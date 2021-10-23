import styled from 'styled-components';

export const Container = styled.nav`
  font-family: 'Roboto Condensed', sans-serif;
  display: grid;
  background-color: ${(props) => props.theme.lightColor};
  font-weight: 300;
  padding: 1rem 3rem;
  grid-template-columns: minmax(200px, 1fr) 1fr;
`;

export const SectionHome = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-right: auto;
  justify-items: center;
  align-items: center;
  column-gap: 1rem;
  color: ${(props) => props.theme.brownColor};
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
`;

export const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.013rem;
  letter-spacing: 0.338rem;
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
