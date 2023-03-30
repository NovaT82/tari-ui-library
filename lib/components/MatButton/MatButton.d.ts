/// <reference types="react" />
import { ButtonProps as MuiButtonProps } from '@mui/material';
export interface ButtonProps extends MuiButtonProps {
    label: string;
}
declare const MatButton: {
    ({ label, ...rest }: ButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
    };
};
export default MatButton;
