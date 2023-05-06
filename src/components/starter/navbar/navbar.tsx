import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
	HeroiconsSquares2x220Solid as HiSquare,
	HeroiconsSquaresPlus20Solid as HiSquarePlus,
} from "../icons/qwik";
import { ThemeContext } from "~/routes/layout";

interface ChildProps {
	mobileMenuState: { isMenuOpen: boolean };
}

export default component$<ChildProps>(
	({ mobileMenuState: mobileMenuState }) => {
		// ThemeContext
		const theme = useContext(ThemeContext);

		return (
			<nav
				class={`${
					// mobileMenuState.isMenuOpen ? "h-screen bg-black" : "h-auto"
					""
				} h-screen bg-white dark:bg-black fixed w-full p-4`}
			>
				<div class="flex flex-row justify-between items-end md:w-[10%] text-5xl">
					<a href="/" title="logo">
						<h2>Digency</h2>
					</a>
					{mobileMenuState.isMenuOpen ? (
						<HiSquare
							class="cursor-pointer md:hidden"
							onClick$={() => {
								mobileMenuState.isMenuOpen = !mobileMenuState.isMenuOpen;
								document.body.classList.remove("overflow-hidden");
							}}
						/>
					) : (
						<HiSquarePlus
							class="cursor-pointer md:hidden"
							onClick$={() => {
								mobileMenuState.isMenuOpen = !mobileMenuState.isMenuOpen;
								document.body.classList.add("overflow-hidden");
							}}
						/>
					)}
				</div>
				<div class={"flex flex-col-reverse"}>
					<ul class={"p-5 w-full text-center"}>
						<li>
							<Link class={"block text-2xl md:text-lg"} href="#hero">
								Home
							</Link>
						</li>
						<li>
							<Link class={"block text-2xl md:text-lg"} href="#about">
								About
							</Link>
						</li>
						<li>
							<Link class={"block text-2xl md:text-lg"} href="#service">
								Service
							</Link>
						</li>
						<li>
							<Link class={"block text-2xl md:text-lg"} href="#projects">
								Projects
							</Link>
						</li>
						<li>
							<Link class={"block text-2xl md:text-lg"} href="#blog">
								Blog
							</Link>
						</li>
					</ul>
					<div class={"self-end"}>
						<button
							class={"uppercase"}
							onClick$={() =>
								(theme.value = theme.value === "dark" ? "light" : "dark")
							}
						>
							{theme.value}
						</button>
					</div>
				</div>
			</nav>
		);
	},
);
