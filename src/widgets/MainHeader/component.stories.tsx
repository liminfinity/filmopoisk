import type { Meta, StoryObj } from "@storybook/react";
import Component from "./component";
import { ReduxProvider } from "@app/providers";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
	component: Component,
	title: "Widgets/MainHeader",
	decorators: [
		Story => (
			<ReduxProvider>
				<Story />
			</ReduxProvider>
		),
		withRouter
	],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const MainHeaderDefault: Story = {
	args: {},
};

export default meta;
