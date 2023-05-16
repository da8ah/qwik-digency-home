import { component$ } from "@builder.io/qwik";
import Button from "~/components/ui/button";
import SectionTitle from "~/components/ui/title";

export default component$(() => {
	return (
		<section
			id="newsletter"
			class={
				"py-10 px-1 lg:py-10 lg:px-20 flex flex-row justify-center items-center bg-gradient-to-r from-white via-[#9a89f8] to-[#816aff] dark:from-[#1b0973] dark:via-[#170960] dark:to-[#0e0938] text-[--primary-color-light] dark:text-[--primary-color]"
			}
		>
			<div
				class={"w-[50%] text-left flex flex-col justify-center content-center"}
			>
				<h3 class={"text-2xl"}>Let's work together</h3>
				<SectionTitle
					class="pt-5 pb-10 text-3xl"
					title={"Explore the"}
					bold={"hidden"}
					opt={"ideas and subscribe!"}
				/>
			</div>
			<div class={"w-[50%]"}>
				<div class={"rounded-lg px-3 py-1 flex flex-row bg-white"}>
					<input
						class={"w-[70%] flex flex-grow px-2 py-1"}
						type="email"
						placeholder="Email"
					/>
					<Button class="rounded-md px-2" size="lg">
						Subscribe Now
					</Button>
				</div>
			</div>
		</section>
	);
});
