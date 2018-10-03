import { Typography, Card, Button } from '@material-ui/core';
import styled from 'styled-components';

export const BrowsePageContainer = styled.section`
  height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 3rem auto 0;
  padding: 0 2.4rem;
`;

export const MovieCardWrapper = styled.section`
  display: grid;
  grid-template: repeat(1, 100%) / repeat(5, 1fr);
  grid-gap: 2rem;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const MovieCard = styled(Card)`
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  backface-visibility: visible;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieCardImg = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 50%;
  opacity: 1;
`;

export const MovieTextContainer = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 50%;
  padding: 1rem;
`;

export const MovieText = styled(Typography)`
  font-size: 1.6rem;
`;

export const ViewMoreButton = styled(Button)`
  background-color: transparent !important;
  color: #4357bc !important;
  border: 0.2rem solid #4357bc !important;
  width: 12rem !important;

  &:hover {
    background-color: #4357bc !important;
    color: #eee !important;
  }
`;

export const BrowsePageText = styled(Typography)`
  &::before {
    content: '';
    border-left: 0.4rem solid #00d280;
    margin-right: 1.5rem;
  }
`;
