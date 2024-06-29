import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Component from "./component";

const meta = {
	component: Component,
	title: "Shared/SearchInput",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	args: {
		onClick: fn(),
		onChange: fn()
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const SearchInputDefault: Story = {
	args: {
		placeholder: "Название фильма",
	},
};
export const SearchInputWithClearBtn: Story = {
	args: {
		placeholder: "Название фильма",
		value: "Хоббит"
	},
};

export default meta;