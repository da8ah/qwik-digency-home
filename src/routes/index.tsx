import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Blog from "~/components/starter/blog";
import Business from "~/components/starter/business";
import Hero from "~/components/starter/hero";
import Newsletter from "~/components/starter/newsletter";
import Stats from "~/components/starter/stats";
import Team from "~/components/starter/team";
import Testimonials from "~/components/starter/testimonials";
import Whyus from "~/components/starter/whyus";

export default component$(() => {
	return (
		<>
			<Hero />
			<Stats />
			<Business />
			<Whyus />
			<Team />
			<Blog />
			<Testimonials />
			<Newsletter />
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
