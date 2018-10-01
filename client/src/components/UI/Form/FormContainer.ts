import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 85vh;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

export const FormButtonSeperator = styled.div`
  text-transform: uppercase;
  width: 100%;
  position: relative;
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bfbfbf;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.1rem;

  &::before {
    content: '';
    position: absolute;
    width: 40%;
    border-bottom: 0.1rem solid #bfbfbf;
    left: 0;
    top: 50%;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 40%;
    border-bottom: 0.1rem solid #aaa;
    right: 0;
    top: 50%;
    z-index: 1;
  }
`;
