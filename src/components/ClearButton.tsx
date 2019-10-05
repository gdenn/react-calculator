import React from "react";
import './ClearButton.scss';

interface ClearButtonProps {
    children: string,
    handleClear: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const ClearButton: React.FunctionComponent<ClearButtonProps> = (props: ClearButtonProps) => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)

export default ClearButton;