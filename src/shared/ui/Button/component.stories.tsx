import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Component from "./component";

const meta = {
	component: Component,
	title: "Shared/Button",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const ButtonText: Story = {
	args: {
		children: "Отправить",
		variant: "text",
	},
};
export const ButtonFilled: Story = {
	args: {
		children: "Отправить",
		variant: "filled",
	},
};
export const ButtonOutlined: Story = {
	args: {
		children: "Отправить",
		variant: "outlined",
	},
};

export default meta;
