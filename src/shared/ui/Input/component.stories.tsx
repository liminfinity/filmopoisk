import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Component from "./component";

const meta = {
	component: Component,
	title: "Shared/Input",
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

export const InputDefault: Story = {
	args: {
		placeholder: "Введите логин",
	},
};
export const InputWithLabel: Story = {
	args: {
		placeholder: "Введите логин",
		label: "Логин",
	},
};
export const InputRequired: Story = {
	args: {
		placeholder: "Введите логин",
		label: "Логин",
		required: true,
	},
};
export const InputError: Story = {
	args: {
		placeholder: "Введите логин",
		label: "Логин",
		required: true,
		error: "Это поле обязательно",
	},
};

export default meta;