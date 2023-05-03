import { component$ } from "@builder.io/qwik";
import Infobox from "../infobox/infobox";

export default component$(() => {
	return (
		<section>
			<h3>Why choose us</h3>
			<h1>
				Specialist in aviding clients on
				<br />
				<span class="highlight">financial challenges</span>
			</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Id semper risus in
				hendrerit gravida rutrum quisque. Integer eget aliquet nibh praesent
				tristique magna sit amet purus.
			</p>
			<Infobox q:slot="title">Hola</Infobox>
		</section>
	);
});
