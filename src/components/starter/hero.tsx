import { component$ } from "@builder.io/qwik";
import { shootConfetti } from "~/components/assets/animations";
import Button from "~/components/ui/button";

export default component$(() => {
	return (
		<section
			id="hero"
			class={
				"py-10 px-1 lg:p-20 flex flex-col-reverse md:flex-row items-center bg-[--body-bg-light] dark:bg-[--body-bg] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div class={"md:w-[55%] lg:w-[50%]"}>
				<h1
					class={
						"text-3xl md:text-4xl lg:text-5xl md:leading-tight text-center md:text-left font-extrabold text-[--heading-color-light] dark:text-[--heading-color]"
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
						"py-10 text-lg text-center md:text-left text-[--small-text-color-light] dark:text-[--small-text-color]"
					}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt.
				</p>
				<div
					class={
						"flex flex-row justify-around md:justify-start lg:justify-between lg:w-[55%] font-bold text-[--small-text-color-light] dark:text-[--small-text-color]"
					}
				>
					<Button
						class="md:mr-10"
						rounded="md"
						size="lg"
						onClick$={() => shootConfetti()}
					>
						Get Started Now
					</Button>
					<Button
						secondary
						href="https://github.com/da8ah"
						rounded="md"
						size="lg"
					>
						Explore the docs
					</Button>
				</div>
			</div>
			<div class={"w-[90%] md:w-[45%] lg:w-[50%] flex justify-center"}>
				<img
					src="img/hero-img.png"
					alt="A graphic image of people and applications"
				/>
			</div>
		</section>
	);
});
