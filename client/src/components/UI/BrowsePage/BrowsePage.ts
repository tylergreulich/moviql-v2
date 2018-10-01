import styled from 'styled-components';
import BrowsePageImg from '../../../assets/img/stonehenge.jpg';

export const BrowsePageContainer = styled.section`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  grid-gap: 2rem;
  width: 100%;
  height: 100%;
`;

export const MovieCardImg = styled.figure`
  background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${BrowsePageImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 50%;
`;
