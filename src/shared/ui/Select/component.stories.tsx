import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Component from "./mockProvider";

const meta = {
	component: Component,
	title: "Shared/Select",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onChange: fn()
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const DropdownDefault: Story = {
	args: {},
};

export default meta;