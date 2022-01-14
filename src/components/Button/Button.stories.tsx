import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        btnStyle: {
            options: [
                "primary",
                "secondary",
                "success",
                "danger",
                "warning",
                "info",
                "light",
                "dark",
                "link",
            ],
            control: { type: "select" },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    btnStyle: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    btnStyle: "secondary",
};

export const Rounded = Template.bind({});
Rounded.args = {
    rounded: true,
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
};

export const Styled = Template.bind({});
Styled.args = {
    btnStyle: "success",
};
