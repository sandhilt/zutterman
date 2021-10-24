import styled, { css } from 'styled-components';

export interface ContainerProps {
  backgroundImage: string;
  foregroundColor: string;
}

export interface TextColor {
  textColor?: string;
}

export const Container = styled.section<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
  width: 100%;
  height: 1024px;
  background-image: url(${(props) => props.backgroundImage});
  background-position: 100% center;
  background-repeat: no-repeat;
  background-color: ${(props) => props.foregroundColor ?? '#fff'};

  mix-blend-mode: multiply;
`;

const TextColorCSS = css<TextColor>`
  color: ${(props) => props.textColor ?? '#000'};
`;

export const Title = styled.h1<TextColor>`
  ${TextColorCSS}
  font-weight: 700;
  font-size: 5.125rem;
`;

export const Description = styled.h2<TextColor>`
  ${TextColorCSS}
  font-weight: 300;
  font-size: 3.013rem;
`;

export const GroupText = styled.span`
  display: flex;
  flex-direction: column;
`;
