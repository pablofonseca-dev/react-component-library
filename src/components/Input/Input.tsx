import classNames from "classnames";
import { forwardRef } from "react";
import { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

import "./Input.scss";

export type InputSizeType = "small" | "medium" | "large";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputSize: InputSizeType;
    rounded: boolean;
    isError: boolean;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { inputSize = "medium", rounded, isError, ...rest }: InputProps,
    ref
) => {
    const classes = classNames({
        input: true,
        [`input--${inputSize}`]: true,
        [`input--rounded`]: rounded,
        [`input--error`]: isError,
    });

    return (
        <input
            className={`${classes} ${rest.className || ""}`}
            ref={ref}
            {...rest}
        />
    );
};

export default forwardRef(Input);
