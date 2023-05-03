import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Business from "~/components/starter/business/business";

import Hero from "~/components/starter/hero/hero";
import Stats from "~/components/starter/stats/stats";
import Whyus from "~/components/starter/whyus/whyus";

export default component$(() => {
	return (
		<>
			<Hero />
			<Stats />
			<Business />
			<Whyus />
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
