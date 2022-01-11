import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

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

export const Success = Template.bind({});
Success.args = {
  btnStyle: "success",
};
