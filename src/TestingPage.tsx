import { createRef } from "react";
import Input from "./components/Input/Input";

export default function TestingPage() {
    const handleChange = (e: any) => {
        e.preventDefault();
        console.log("Hello");
        console.log(e.target.value);
    };
    const inputRef = createRef<HTMLInputElement>();

    const clickHandler = () => {
        inputRef!.current!.focus();
    };

    return (
        <div>
            <Input
                inputSize={"large"}
                rounded={true}
                isError={true}
                placeholder="john@example.com"
            />
            <button onClick={clickHandler}>Click & Focus!</button>
        </div>
    );
}
