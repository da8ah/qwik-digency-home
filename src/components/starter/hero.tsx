import { component$ } from "@builder.io/qwik";
import { shootConfetti } from "~/components/assets/animations";
import Button from "~/components/ui/button";

export default component$(() => {
	return (
		<section
			id="hero"
			class={
				"py-10 px-1 flex flex-col-reverse items-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div>
				<h1
					class={
						"text-3xl text-center md:text-left font-extrabold text-[--heading-color-light] dark:text-[--heading-color]"
					}
				>
					We're Creating Perfect <br />
					Digital Products To <br />
					<span
						class={"text-[--primary-color-light] dark:text-[--primary-color]"}
					>
						Promote Your Brand
					</span>
				</h1>
				<p
					class={
						"py-10 text-xl text-center md:text-left text-[--small-text-color-light] dark:text-[--small-text-color]"
					}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div
					class={
						"flex flex-row justify-around font-bold text-[--small-text-color-light] dark:text-[--small-text-color]"
					}
				>
					<Button rounded="md" size="lg" onClick$={() => shootConfetti()}>
						Get Started Now
					</Button>
					<Button secondary href="" rounded="md" size="lg">
						Explore the docs
					</Button>
				</div>
			</div>
			<div class={"w-[90%]"}>
				<img
					src="img/hero-img.png"
					alt="A graphic image of people and applications"
				/>
			</div>
		</section>
	);
});
