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
			title: "Побег из Шоушенка",
			description:
				"Двое заключенных на протяжении нескольких лет связывают себя узами брака, находя утешение и искупление через обычные поступки.",
			release_year: 1994,
			genre: "Драма",
			poster: "https://pic.rutubelist.ru/video/ac/a8/aca823155688e35e5a60bc0fe9499c47.jpg",
		},
	},
};

export default meta;
