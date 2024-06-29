import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Component from "./mockProvider";

const meta = {
	component: Component,
	title: "Shared/PaginationControl",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onChange: fn()
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const PaginationControlDefault: Story = {
	args: {},
};

export default meta;