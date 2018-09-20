import styled from 'styled-components';
import { Button } from '@material-ui/core';

interface FormButtonProps {
  wide?: boolean | string;
  uppercase?: boolean | string;
}

export const FormButton = styled(Button)`
  width: ${(props: FormButtonProps) => (props.wide ? '30rem' : null)};
  text-transform: ${(props: FormButtonProps) =>
    props.uppercase ? 'uppercase' : null};
`;
