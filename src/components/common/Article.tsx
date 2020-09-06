import styled from 'styled-components';
import { Image } from 'components/common/Image';

export const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  ${Image} {
    margin-right: 1rem;
  }
  p {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 10vw;
  }
`;
