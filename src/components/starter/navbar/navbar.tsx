import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
	HeroiconsSquares2x220Solid as HiSquare,
	HeroiconsSquaresPlus20Solid as HiSquarePlus,
} from "../icons/qwik";

interface ChildProps {
	mobileMenuState: { isMenuOpen: boolean };
}

export default component$<ChildProps>(
	({ mobileMenuState: mobileMenuState }) => {
		return (
			<nav
				class={`${
					mobileMenuState.isMenuOpen ? "h-screen bg-black" : "h-auto"
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
				<ul>
					<li>
						<Link class={"md:text-lg"} href="#hero">
							Home
						</Link>
					</li>
					<li>
						<Link class={"md:text-lg"} href="#about">
							About
						</Link>
					</li>
					<li>
						<Link class={"md:text-lg"} href="#service">
							Service
						</Link>
					</li>
					<li>
						<Link class={"md:text-lg"} href="#projects">
							Projects
						</Link>
					</li>
					<li>
						<Link class={"md:text-lg"} href="#blog">
							Blog
						</Link>
					</li>
				</ul>
				<div>Light</div>
			</nav>
		);
	},
);
