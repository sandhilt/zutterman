import styled from 'styled-components';

export const Container = styled.footer`
  color: ${(props) => props.theme.lightBrownColor};
  background-color: ${(props) => props.theme.greyColor};
  padding-bottom: 5rem;
  display: grid;
  grid-auto-flow: column;
`;

export const SocialSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 1rem;
`;

export const SocialTitle = styled.h4`
  font-size: 1.7rem;
  grid-column: 1 / span 3;
`;

export const SocialAnchor = styled.div`
  a {
    color: ${(props) => props.theme.lightBrownColor};
  }
`;
