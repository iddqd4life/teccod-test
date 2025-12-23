import {type ReactNode} from 'react';
import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button = ({text, onClick}: ButtonProps): ReactNode => {
    return <button className={styles.button} onClick={onClick}>{text}</button>;
};

export default Button;