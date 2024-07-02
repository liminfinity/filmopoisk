import type { Meta, StoryObj } from "@storybook/react";
import Component from "./component";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: Component,
	decorators: [withRouter()],
	title: "Widgets/MovieFilters",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const MovieFiltersDefault: Story = {
	args: {},
};

export default meta;
