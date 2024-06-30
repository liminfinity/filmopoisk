import type { Meta, StoryObj } from "@storybook/react";
import Component from "./mockProvider";
import { ReduxProvider } from "@app/providers";

const meta = {
	component: Component,
	title: "Entities/Auth/AuthModal",
	decorators: [(Story) => (
		<ReduxProvider>
			<Story />
		</ReduxProvider>
	)],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const AuthModalDefault: Story = {
	args: {},
};

export default meta;