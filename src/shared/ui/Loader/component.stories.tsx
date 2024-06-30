import type { Meta, StoryObj } from "@storybook/react";
import Component from "./component";

const meta = {
	component: Component,
	title: "Shared/Loader",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const LoaderDefault: Story = {
	args: {},
};

export default meta;
