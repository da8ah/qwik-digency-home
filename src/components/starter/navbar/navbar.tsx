import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ThemeContext } from "~/routes/layout";
import {
	HeroiconsSquares2x220Solid as HiSquare,
	HeroiconsSquaresPlus20Solid as HiSquarePlus,
	MdiLightningBoltCircle as MdiDark,
	MdiLightningBolt as MdiLight,
} from "../icons/icons";

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
					mobileMenuState.isMenuOpen
						? "h-screen bg-[--body-bg]"
						: "h-auto bg-transparent"
				} fixed w-full p-4`}
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
				<div
					class={`${
						mobileMenuState.isMenuOpen ? "visible" : "invisible"
					} h-full flex flex-col justify-around`}
				>
					<ul class={"p-5 w-full text-center"}>
						<li>
							<Link class={"block py-2 text-3xl md:text-lg"} href="#hero">
								Home
							</Link>
						</li>
						<li>
							<Link class={"block py-2 text-3xl md:text-lg"} href="#about">
								About
							</Link>
						</li>
						<li>
							<Link class={"block py-2 text-3xl md:text-lg"} href="#service">
								Service
							</Link>
						</li>
						<li>
							<Link class={"block py-2 text-3xl md:text-lg"} href="#projects">
								Projects
							</Link>
						</li>
						<li>
							<Link class={"block py-2 text-3xl md:text-lg"} href="#blog">
								Blog
							</Link>
						</li>
					</ul>
					<div class={"w-full flex justify-center"}>
						<button
							class={
								"rounded-full px-2 w-1/5 flex flex-row items-center capitalize text-xl ring-1 ring-black ring-offset-black dark:ring-white dark:ring-offset-white"
							}
							onClick$={() =>
								(theme.value = theme.value === "dark" ? "light" : "dark")
							}
						>
							{theme.value === "dark" ? (
								<MdiDark class="cursor-pointer" />
							) : (
								<MdiLight class="cursor-pointer" />
							)}{" "}
							{theme.value}
						</button>
					</div>
				</div>
			</nav>
		);
	},
);
