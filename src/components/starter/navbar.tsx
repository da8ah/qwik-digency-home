import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
	HeroiconsSquares2x220Solid as HiSquare,
	HeroiconsSquaresPlus20Solid as HiSquarePlus,
	MdiLightningBoltCircle as MdiDark,
	MdiLightningBolt as MdiLight,
} from "~/components/assets/icons";
import { ThemeContext } from "~/routes/layout";

interface ChildProps {
	mobileMenuState: { isMenuOpen: boolean };
}

export default component$<ChildProps>(
	({ mobileMenuState: mobileMenuState }) => {
		// ThemeContext
		const theme = useContext(ThemeContext);

		const isFixed = useSignal(false);
		const changeFixedPosition = $(() => {
			if (window.scrollY > 0) {
				isFixed.value = true;
			} else {
				isFixed.value = false;
			}
		});

		return (
			<nav
				window:onScroll$={changeFixedPosition}
				class={`${
					isFixed.value
						? "pb-2 md:fixed md:bg-[--body-bg-light] md:dark:bg-[--btn-secondary-bg] md:hover:bg-[--body-bg-light] md:hover:dark:bg-[--btn-secondary-bg]"
						: "py-0 md:relative md:bg-transparent md:dark:bg-transparent"
				} ${
					mobileMenuState.isMenuOpen
						? "h-screen bg-[--body-bg-light] dark:bg-[--body-bg]"
						: "h-auto bg-transparent hover:bg-[--body-bg-light] hover:dark:bg-[--body-bg]"
				} fixed md:h-auto w-full top-0 left-0 px-1 md:p-0 lg:px-20 md:flex md:flex-row md:justify-between`}
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
						mobileMenuState.isMenuOpen ? "flex" : "hidden"
					} md:w-full h-full md:h-auto flex-col md:flex md:flex-row justify-around md:justify-between`}
				>
					<ul
						class={
							"p-5 w-full md:flex md:flex-row md:justify-center text-center text-[--link-color-light] dark:text-[--link-color]"
						}
					>
						<li>
							<Link
								class={"block py-2 md:mx-2 lg:mx-5 text-3xl md:text-lg"}
								href="#hero"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								class={"block py-2 md:mx-2 lg:mx-5 text-3xl md:text-lg"}
								href="#about"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								class={"block py-2 md:mx-2 lg:mx-5 text-3xl md:text-lg"}
								href="#service"
							>
								Service
							</Link>
						</li>
						<li>
							<Link
								class={"block py-2 md:mx-2 lg:mx-5 text-3xl md:text-lg"}
								href="#projects"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								class={"block py-2 md:mx-2 lg:mx-5 text-3xl md:text-lg"}
								href="#blog"
							>
								Blog
							</Link>
						</li>
					</ul>
					<div class={"w-full md:w-[20%] flex justify-center items-center"}>
						<button
							class={
								"rounded-full px-5 md:h-7 w-1/3 md:w-auto flex flex-row justify-center items-center capitalize text-2xl md:text-lg md:bg-transparent md:dark:bg-transparent bg-[--btn-primary-bg-light] dark:bg-[--btn-primary-bg] text-[--primary-color-light] dark:text-white"
							}
							onClick$={() =>
								(theme.value = theme.value === "dark" ? "light" : "dark")
							}
						>
							<span class={"text-2xl"}>
								{theme.value === "light" ? (
									<MdiDark class="cursor-pointer" />
								) : (
									<MdiLight class="cursor-pointer" />
								)}
							</span>
							{"   "}
							{theme.value === "dark" ? "light" : "dark"}
						</button>
					</div>
				</div>
			</nav>
		);
	},
);
