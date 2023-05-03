import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<nav class="w-full p-4 flex flex-row justify-between items-center">
			<div class="w-[10%] text-5xl">
				<a href="/" title="logo">
					<h2>Digency</h2>
				</a>
			</div>
			<ul>
				<li>
					<Link class={"text-lg"} href="#hero">
						Home
					</Link>
				</li>
				<li>
					<Link class={"text-lg"} href="#about">
						About
					</Link>
				</li>
				<li>
					<Link class={"text-lg"} href="#service">
						Service
					</Link>
				</li>
				<li>
					<Link class={"text-lg"} href="#projects">
						Projects
					</Link>
				</li>
				<li>
					<Link class={"text-lg"} href="#blog">
						Blog
					</Link>
				</li>
			</ul>
			<div>Light</div>
		</nav>
	);
});
