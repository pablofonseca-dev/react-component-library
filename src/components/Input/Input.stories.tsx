import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

export default {
    title: "Atoms/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
    <Input {...args} placeholder="john@example.com" />
);

export const Large = Template.bind({});
Large.args = {
    inputSize: "large",
};

export const Medium = Template.bind({});
Medium.args = {
    inputSize: "medium",
};

export const Small = Template.bind({});
Small.args = {
    inputSize: "small",
};

export const Disabled = Template.bind({});
Disabled.args = {
    isDisabled: true,
};

export const Error = Template.bind({});
Error.args = {
    isError: true,
};
