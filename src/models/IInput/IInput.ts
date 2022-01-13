import { InputHTMLAttributes } from "react";

export type InputSizeType = "small" | "medium" | "large";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    inputSize?: InputSizeType;
    type: string;
    name?: string;
    className?: string;
    value?: string;
    placeholder?: string;
    onChange?: () => void;
    isDisabled?: boolean;
    rounded?: boolean;
    isError?: boolean;
}

export default IInputProps;
