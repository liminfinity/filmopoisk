import type { Meta, StoryObj } from "@storybook/react";
import Component from "./component";

const meta = {
	component: Component,
	title: "Entities/Movie/MoviesNotFound",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const MoviesNotFoundDefault: Story = {
	args: {},
};

export default meta;
