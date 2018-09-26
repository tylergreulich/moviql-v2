import styled from 'styled-components';
import HomePageImg from 'src/assets/img/home-page-photo.jpg';

export const MovieImage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: -4;
  background-image: linear-gradient(
      to bottom right,
      rgba(22, 22, 22, 0.6),
      rgba(22, 22, 22, 0.6)
    ),
    url(${HomePageImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
