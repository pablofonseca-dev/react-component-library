import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";
import IInputProps from "../../models/IInput/IInput";

import "./Input.scss";

const Input: FC<IInputProps> = ({
    inputSize = "medium",
    type,
    name,
    className,
    value,
    placeholder,
    onChange,
    isDisabled,
    rounded,
    isError,
}: IInputProps) => {
    const classes = classNames({
        input: true,
        [`input--${inputSize}`]: true,
        [`input--rounded`]: rounded,
        [`input--error`]: isError,
    });
    return (
        <input
            type={type}
            name={name}
            className={`${classes}${className || ""}`}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={isDisabled}
        />
    );
};

export default Input;
