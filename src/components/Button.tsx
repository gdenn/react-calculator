import React from "react";
import './Button.scss';

interface ButtonProps {
    children: string,
    onClickHandler: (val: string) => void,
}

const isOperator = (val: string): boolean => {
    return (typeof val === "string" && !Number.isNaN(Number(val))) || val === "." || val === "=";
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => (
    <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
         onClick={() => props.onClickHandler(props.children)}>
        {props.children}
    </div>
)

export default Button;