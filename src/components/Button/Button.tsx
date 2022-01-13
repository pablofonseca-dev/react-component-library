import { FC } from "react";
import classnames from "classnames";
import IButtonProps from "../../models/IButton/IButton";
import "./Button.scss";

const Button: FC<IButtonProps> = (
    {
        size = "medium",
        btnStyle = "primary",
        children,
        onClick,
        rounded,
        className,
        name,
        disabled,
    }: IButtonProps,
    ...rest
) => {
    const classes = classnames({
        btn: true,
        [`btn--${size}`]: size,
        [`btn--${btnStyle}`]: btnStyle,
        [`btn--rounded`]: rounded,
        [`btn--${btnStyle}`]: btnStyle,
    });
    return (
        <button
            className={`${classes} ${className || ""}`}
            onClick={onClick}
            name={name}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
