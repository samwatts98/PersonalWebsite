import styled, { keyframes, css } from 'styled-components';
import React, { useState } from 'react';
const ImageWrapper = styled.div``;

const wobble = keyframes`
  33% {
    transform: rotate(15deg);
  }
  67% {
    transform: rotate(-30deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
type ImageProps = {
  height?: string;
  width?: string;
  src: string;
};
type InteractiveImage = {
  wobble: boolean;
  onClick: () => void;
  onAnimationEnd: () => void;
} & ImageProps;

const ImageStyled = styled.img<InteractiveImage>`
  border-radius: 1rem;
  margin: auto;
  width: 100%;
  max-width: 400px;
  min-width: 100px;
  height: auto;

  ${(props) => {
    return (
      props.wobble &&
      css`
        animation: ${wobble} 0.8s ease-in-out;
      `
    );
  }};
`;

const ImageComponent = (props: ImageProps): React.ReactElement => {
  const [wobble, setWobble] = useState(false);

  return (
    <ImageWrapper>
      <ImageStyled
        wobble={wobble}
        onClick={() => setWobble((w) => !w)}
        onAnimationEnd={() => setWobble(false)}
        {...props}
      />
    </ImageWrapper>
  );
};

export const Image = styled(ImageComponent)``;
