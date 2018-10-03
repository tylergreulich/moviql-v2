import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const MoviePageImageHeader = styled.div`
  width: 100vw;
  height: 50vh;
`;

export const MoviePageImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const MoviePageInfoContainer = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  transform: translateY(-10rem);
`;

export const MovieInfo = styled(Card)`
  width: 50%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
