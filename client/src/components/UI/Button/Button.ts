import styled from 'styled-components';
import { Button } from '@material-ui/core';

interface FormButtonProps {
  wide?: boolean | string;
  uppercase?: boolean;
}

export const FormButton = styled(Button)`
  width: ${(props: FormButtonProps) => (props.wide ? '30rem' : '15rem')};
  text-transform: ${(props: FormButtonProps) =>
    props.uppercase ? 'uppercase' : 'none'};
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
`;
