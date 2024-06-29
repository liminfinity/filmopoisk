import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Component from "./component";

const meta = {
	component: Component,
	title: "Shared/ArrowButton",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const ArrowButtonRight: Story = {
	args: {
		direction: "right",
	},
};
export const ArrowButtonLeft: Story = {
	args: {
		direction: "left",
	},
};
export const ArrowButtonDisabled: Story = {
	args: {
		direction: "right",
		disabled: true,
	},
};

export default meta;