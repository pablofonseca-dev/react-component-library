import {
    ButtonHTMLAttributes,
    FC,
    forwardRef,
    ForwardRefRenderFunction,
    ReactNode,
} from "react";
import classnames from "classnames";
import "./Button.scss";

type StyleType =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";

type SizeType = "small" | "medium" | "large";

interface ButtonStyleProps {
    btnStyle?: StyleType;
    size?: SizeType;
}

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonStyleProps {
    rounded?: boolean;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
    {
        size = "medium",
        btnStyle = "primary",
        rounded,
        children,
        ...rest
    }: ButtonProps,
    ref
) => {
    const classes = classnames({
        btn: true,
        [`btn--${size}`]: size,
        [`btn--${btnStyle}`]: btnStyle,
        [`btn--rounded`]: rounded,
        [`btn--${btnStyle}`]: btnStyle,
    });

    return (
        <button className={`${classes} ${rest.className || ""}`} {...rest}>
            {children}
        </button>
    );
};

export default forwardRef(Button);
