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
						? "h-screen bg-[--body-bg-light] dark:bg-[--btn-secondary-bg]"
						: "h-auto bg-transparent"
				} fixed md:relative md:h-auto w-full top-0 left-0 p-4 md:p-0 md:flex md:flex-row md:justify-between`}
			>
				<div class="flex flex-row justify-between items-end md:items-center md:w-auto text-5xl text-[--primary-color-light] dark:text-[--primary-color]">
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
					} md:visible md:w-full h-full md:h-auto flex flex-col md:flex-row justify-around md:justify-between`}
				>
					<ul
						class={
							"p-5 w-full md:flex md:flex-row md:justify-center text-center text-[--link-color-light] dark:text-[--link-color]"
						}
					>
						<li>
							<Link
								class={"block py-2 md:mx-5 text-3xl md:text-lg"}
								href="#hero"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								class={"block py-2 md:mx-5 text-3xl md:text-lg"}
								href="#about"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								class={"block py-2 md:mx-5 text-3xl md:text-lg"}
								href="#service"
							>
								Service
							</Link>
						</li>
						<li>
							<Link
								class={"block py-2 md:mx-5 text-3xl md:text-lg"}
								href="#projects"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								class={"block py-2 md:mx-5 text-3xl md:text-lg"}
								href="#blog"
							>
								Blog
							</Link>
						</li>
					</ul>
					<div class={"w-full md:w-[20%] flex justify-center items-center"}>
						<button
							class={
								"rounded-full px-5 md:h-5 w-1/3 md:w-auto flex flex-row justify-center items-center capitalize text-2xl md:text-lg md:bg-transparent md:dark:bg-transparent bg-[--btn-primary-bg-light] dark:bg-[--btn-primary-bg] text-[--primary-color-light] dark:text-white"
							}
							onClick$={() =>
								(theme.value = theme.value === "dark" ? "light" : "dark")
							}
						>
							{theme.value === "light" ? (
								<MdiDark class="cursor-pointer" />
							) : (
								<MdiLight class="cursor-pointer" />
							)}
							{"   "}
							{theme.value === "dark" ? "light" : "dark"}
						</button>
					</div>
				</div>
			</nav>
		);
	},
);
