import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Component from "./mockProvider";

const meta = {
	component: Component,
	title: "Shared/Modal",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onChange: fn(),
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const ModalDefault: Story = {
	args: {},
};

export default meta;
