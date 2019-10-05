import React from "react";
import './Input.scss';

interface InputProps {
    input: string,
}

const Input: React.FunctionComponent<InputProps> = props => (
    <div className="input">
        {props.input}
    </div>
);

export default Input;