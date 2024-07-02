import type { Meta, StoryObj } from "@storybook/react";
import Component from "./component";

const meta = {
	component: Component,
	title: "Entities/Movie/ActorCard",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const ActorCardDefault: Story = {
	args: {
		actor: {
			name: "Элайджа Вуд",
			photo: "https://avatars.dzeninfra.ru/get-zen_doc/4797662/pub_60c308b0389d4416965a7072_60c308bf802dfd6cb24d8846/scale_1200",
		},
	},
};

export default meta;
