import { ButtonHTMLAttributes, ReactNode } from "react";

type StyleType =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

type SizeType = "small" | "medium" | "large";

interface IButtonStyleProps {
    btnStyle?: StyleType;
    size?: SizeType;
}

interface IButtonProps
    extends IButtonStyleProps,
        ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    rounded?: boolean;
    className?: string;
    name?: string;
}

export default IButtonProps;
