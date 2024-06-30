import type { Meta, StoryObj } from "@storybook/react";
import Component from "./component";
import { ReduxProvider } from "@app/providers";

const meta = {
	component: Component,
	title: "Feautres/MovieShortCard",
	decorators: [
		Story => (
			<ReduxProvider>
				<Story />
			</ReduxProvider>
		),
	],
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const MovieShortCardDefault: Story = {
	args: {
		movie: {
			id: "1",
			title: "The Shawshank Redemption",
			description:
				"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
			release_year: 1994,
			genre: "Драма",
			poster: "https://pic.rutubelist.ru/video/ac/a8/aca823155688e35e5a60bc0fe9499c47.jpg",
		},
	},
};

export default meta;
